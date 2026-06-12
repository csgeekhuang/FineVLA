// Interactive demo logic for FineVLA project page
$(document).ready(function () {
  var isVlmCaptionsExpanded = false;

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Helper: render a video player for a sample
  function renderVideo(containerId, sampleId, options) {
    var opts = options || {};
    var $c = $(containerId).empty();
    var src = './static/videos/demos/' + sampleId + '.mp4';
    var videoClass = opts.videoClass || 'demo-video-player';
    $c.append(
      '<video controls muted loop playsinline preload="metadata" class="' + videoClass + '">' +
      '<source src="' + src + '" type="video/mp4">' +
      '</video>'
    );
  }

  function formatViewLabel(label) {
    return String(label || '')
      .replace(/_/g, ' ')
      .replace(/\brgb\b/gi, 'RGB')
      .replace(/\b\w/g, function (ch) { return ch.toUpperCase(); });
  }

  function renderVideoGallery(containerId, views, fallbackSampleId, options) {
    var opts = options || {};
    var $c = $(containerId).empty();
    if (!views || views.length === 0) {
      renderVideo(containerId, fallbackSampleId);
      return;
    }
    var compact = !!opts.compact;
    var groupId = 'vlm-group-' + Math.random().toString(36).slice(2, 9);
    var galleryClass = compact ? 'video-gallery video-gallery-compact' : 'video-gallery';
    if (compact && views.length === 1) {
      galleryClass += ' video-gallery-single-compact';
    }
    var columnClass = views.length === 1
      ? (compact ? 'is-half-desktop is-half-tablet is-full-mobile' : 'is-two-thirds-desktop is-full-mobile')
      : (views.length === 2 ? 'is-half-desktop is-full-mobile' : 'is-one-third-desktop is-full-mobile');
    var boxClass = compact ? 'box video-gallery-box video-gallery-box-compact' : 'box video-gallery-box';
    var labelClass = compact ? 'video-gallery-label video-gallery-label-compact' : 'video-gallery-label';
    var controlsClass = compact ? 'box video-gallery-controls video-gallery-controls-compact' : 'box video-gallery-controls';
    var html = '<div class="columns is-multiline is-centered ' + galleryClass + '">';
    views.forEach(function (view) {
      html +=
        '<div class="column ' + columnClass + '">' +
        '<div class="' + boxClass + '">' +
        '<p class="' + labelClass + '">' + formatViewLabel(view.label) + '</p>' +
        '<video class="vlm-sync-video" data-sync-group="' + groupId + '" muted loop playsinline preload="metadata" width="100%" style="border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15);background:#000;">' +
        '<source src="' + view.src + '" type="video/mp4">' +
        '</video>' +
        '</div></div>';
    });
    html += '</div>';
    html +=
      '<div class="' + controlsClass + '">' +
      '<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">' +
      '<button type="button" class="button is-small is-link is-light vlm-sync-toggle" data-sync-group="' + groupId + '">Play</button>' +
      '<input type="range" min="0" max="1000" value="0" class="vlm-sync-range" data-sync-group="' + groupId + '" style="flex:1;min-width:220px;">' +
      '<span class="is-size-7 has-text-grey vlm-sync-time" data-sync-group="' + groupId + '">0:00 / 0:00</span>' +
      '</div>' +
      '</div>';
    $c.append(html);
    initSyncedVideos($c, groupId);
  }

  function formatTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '0:00';
    var mins = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return mins + ':' + String(secs).padStart(2, '0');
  }

  function initSyncedVideos($container, groupId) {
    var videos = $container.find('video[data-sync-group="' + groupId + '"]');
    var $toggle = $container.find('.vlm-sync-toggle[data-sync-group="' + groupId + '"]');
    var $range = $container.find('.vlm-sync-range[data-sync-group="' + groupId + '"]');
    var $time = $container.find('.vlm-sync-time[data-sync-group="' + groupId + '"]');
    var isSeeking = false;
    var isSyncing = false;

    function getMaster() {
      return videos.get(0);
    }

    function syncTimes(source) {
      if (isSyncing) return;
      isSyncing = true;
      var currentTime = source.currentTime;
      videos.each(function () {
        if (this === source) return;
        if (Math.abs(this.currentTime - currentTime) > 0.08) {
          this.currentTime = currentTime;
        }
      });
      isSyncing = false;
    }

    function updateControls() {
      var master = getMaster();
      if (!master) return;
      var duration = master.duration || 0;
      var currentTime = master.currentTime || 0;
      if (!isSeeking && duration > 0) {
        $range.val(Math.round((currentTime / duration) * 1000));
      }
      $time.text(formatTime(currentTime) + ' / ' + formatTime(duration));
      var isPlaying = videos.toArray().some(function (video) { return !video.paused && !video.ended; });
      $toggle.text(isPlaying ? 'Pause' : 'Play');
    }

    function playAll() {
      var master = getMaster();
      if (!master) return;
      var currentTime = master.currentTime || 0;
      videos.each(function () {
        this.currentTime = currentTime;
        var playPromise = this.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(function () {});
        }
      });
      updateControls();
    }

    function pauseAll() {
      videos.each(function () {
        this.pause();
      });
      updateControls();
    }

    $toggle.on('click', function () {
      var isPlaying = videos.toArray().some(function (video) { return !video.paused && !video.ended; });
      if (isPlaying) {
        pauseAll();
      } else {
        playAll();
      }
    });

    $range.on('input', function () {
      var master = getMaster();
      if (!master || !master.duration) return;
      isSeeking = true;
      var currentTime = (parseFloat(this.value) / 1000) * master.duration;
      videos.each(function () {
        this.currentTime = currentTime;
      });
      updateControls();
    });

    $range.on('change', function () {
      isSeeking = false;
      updateControls();
    });

    videos.on('timeupdate', function () {
      syncTimes(this);
      updateControls();
    });

    videos.on('play pause ended loadedmetadata seeking seeked', function () {
      if (this.readyState >= 1) {
        syncTimes(this);
      }
      updateControls();
    });

    updateControls();
  }

  // ===== DEMO 1: Fine-Grained Annotation Showcase =====
  function initRecap() {
    var samples = DEMO_DATA.recap.samples;
    var $rail = $('#recap-sample-rail').empty();
    samples.forEach(function (s, i) {
      var title = escapeHtml(s.instruction_raw);
      var dataset = escapeHtml(s.dataset);
      $rail.append(
        '<button type="button" class="recap-sample-chip' + (i === 0 ? ' is-active' : '') + '" data-idx="' + i + '">' +
        '<span class="recap-sample-chip-kicker">Sample ' + (i + 1) + ' · ' + dataset + '</span>' +
        '<span class="recap-sample-chip-title">' + title + '</span>' +
        '</button>'
      );
    });
    renderRecap(0);
    $rail.on('click', '.recap-sample-chip', function () {
      renderRecap(parseInt($(this).data('idx'), 10));
    });
  }

  function renderRecap(idx) {
    var s = DEMO_DATA.recap.samples[idx];
    renderVideo('#recap-video-container', s.sample_id, {
      videoClass: 'demo-video-player recap-video-player'
    });
    $('#recap-sample-rail .recap-sample-chip').removeClass('is-active');
    var $activeChip = $('#recap-sample-rail .recap-sample-chip[data-idx="' + idx + '"]');
    $activeChip.addClass('is-active');
    if ($activeChip.length && $activeChip[0].scrollIntoView) {
      $activeChip[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    $('#recap-dataset-tag').text(s.dataset);
    $('#recap-robot-tag').text(s.robot_type);
    $('#recap-instruction-text').text('"' + s.instruction_raw + '"');
    $('#recap-raw-wc').text(s.instruction_word_count + ' words');
    var $list = $('#recap-steps-list').empty();
    s.human_review.forEach(function (step) {
      $list.append('<li>' + step + '</li>');
    });
    $('#recap-fg-wc').text(s.human_review_word_count + ' words');
  }

  // ===== DEMO 2: VLM Caption Comparison =====
  function initVLM() {
    var samples = DEMO_DATA.vlm_comparison.samples;
    var $tabs = $('#vlm-sample-tabs ul');
    var $toggle = $('#vlm-caption-toggle');
    samples.forEach(function (s, i) {
      var ds = s.dataset.split('-')[0];
      $tabs.append('<li class="' + (i === 0 ? 'is-active' : '') + '"><a data-idx="' + i + '">Sample ' + (i + 1) + '</a></li>');
    });
    $toggle.on('click', function () {
      isVlmCaptionsExpanded = !isVlmCaptionsExpanded;
      syncVlmCaptionToggle();
    });
    renderVLM(0);
    $tabs.on('click', 'a', function (e) {
      e.preventDefault();
      var idx = parseInt($(this).data('idx'));
      $tabs.find('li').removeClass('is-active');
      $(this).parent().addClass('is-active');
      renderVLM(idx);
    });
    renderVLMScoreTable();
  }

  function syncVlmCaptionToggle() {
    var $toggle = $('#vlm-caption-toggle');
    var $cards = $('#vlm-caption-cards-extra');
    var hasExtraCards = $cards.children().length > 0;
    $('.vlm-caption-toggle-wrap').toggle(hasExtraCards);
    if (!hasExtraCards) {
      isVlmCaptionsExpanded = false;
    }
    $cards.toggle(hasExtraCards && isVlmCaptionsExpanded);
    $toggle.toggleClass('is-expanded', isVlmCaptionsExpanded);
    $toggle.attr('aria-expanded', isVlmCaptionsExpanded ? 'true' : 'false');
    $toggle.find('span').first().text(isVlmCaptionsExpanded ? 'Hide Additional Model Captions' : 'Show All Model Captions');
  }

  function renderVLM(idx) {
    var s = DEMO_DATA.vlm_comparison.samples[idx];
    $('#vlm-instruction').text(s.instruction_raw || '(vision-only, no instruction provided)');
    renderVideoGallery('#vlm-video-container', s.views, s.sample_id);
    var $primaryCards = $('#vlm-caption-cards-primary').empty();
    var $extraCards = $('#vlm-caption-cards-extra').empty();
    var modelOrder = [
      "RoboFine-VLM (Ours)", "GPT-5.4", "Gemini 3.1 Pro",
      "Doubao Seed 2.0 Pro", "Qwen3.5-Plus", "Qwen3-VL-Plus"
    ];
    function buildCaptionCard(model) {
      var steps = s.captions[model] || [];
      var isOurs = model.indexOf('Ours') >= 0;
      var cardClass = isOurs ? 'vlm-card vlm-card-ours' : 'vlm-card';
      var crown = isOurs ? ' <i class="fas fa-crown"></i>' : '';
      var stepsHtml = '';
      if (steps.length === 0) {
        stepsHtml = '<p class="has-text-grey-light">No caption available</p>';
      } else {
        stepsHtml = '<ol class="vlm-steps">';
        steps.forEach(function (st) { stepsHtml += '<li>' + st + '</li>'; });
        stepsHtml += '</ol>';
      }
      // Token/time stats
      var statsHtml = '';
      if (s.token_stats && s.token_stats[model]) {
        var ts = s.token_stats[model];
        var tokens = ts.total_tokens > 1000 ? (ts.total_tokens / 1000).toFixed(1) + 'K' : ts.total_tokens;
        statsHtml = '<div class="vlm-stats"><span class="icon is-small"><i class="fas fa-coins"></i></span> ' + tokens + ' tokens &nbsp; <span class="icon is-small"><i class="fas fa-clock"></i></span> ' + ts.elapsed_sec + 's</div>';
      }
      return (
        '<div class="column is-one-third-desktop is-half-tablet">' +
        '<div class="card ' + cardClass + '">' +
        '<div class="card-header"><p class="card-header-title">' + model + crown + '</p></div>' +
        '<div class="card-content">' + stepsHtml + statsHtml + '</div>' +
        '</div></div>'
      );
    }

    modelOrder.slice(0, 3).forEach(function (model) {
      $primaryCards.append(buildCaptionCard(model));
    });
    modelOrder.slice(3).forEach(function (model) {
      $extraCards.append(buildCaptionCard(model));
    });
    syncVlmCaptionToggle();
  }

  function renderVLMScoreTable() {
    var $tbody = $('#vlm-score-tbody').empty();
    DEMO_DATA.vlm_comparison.score_table.forEach(function (row) {
      var isOurs = row.is_ours;
      var trClass = isOurs ? 'model-ours' : '';
      $tbody.append(
        '<tr class="' + trClass + '">' +
        '<td class="has-text-centered">' + row.model + (isOurs ? ' <i class="fas fa-crown" style="color:#48c774;"></i>' : '') + '</td>' +
        '<td class="has-text-centered">' + (row.caption_score * 100).toFixed(1) + '</td>' +
        '<td class="has-text-centered">' + (row.consistency * 100).toFixed(1) + '</td>' +
        '<td class="has-text-centered">' + (row.coverage * 100).toFixed(1) + '</td>' +
        '<td class="has-text-centered">' + (row.anti_hallucination * 100).toFixed(1) + '</td>' +
        '</tr>'
      );
    });
  }

  // ===== DEMO 3: Benchmark Explorer =====
  function initBenchmark() {
    var samples = DEMO_DATA.benchmark.samples;
    var $tabs = $('#bench-sample-tabs ul');
    samples.forEach(function (s, i) {
      var shortId = s.sample_id.length > 25 ? s.sample_id.substring(0, 25) + '...' : s.sample_id;
      $tabs.append('<li class="' + (i === 0 ? 'is-active' : '') + '"><a data-idx="' + i + '">' + shortId + '</a></li>');
    });
    renderBenchmark(0);
    $tabs.on('click', 'a', function (e) {
      e.preventDefault();
      var idx = parseInt($(this).data('idx'));
      $tabs.find('li').removeClass('is-active');
      $(this).parent().addClass('is-active');
      renderBenchmark(idx);
    });
  }

  function renderBenchmark(idx) {
    var s = DEMO_DATA.benchmark.samples[idx];
    var labels = DEMO_DATA.benchmark.capability_labels;

    // Show GT fine-grained instruction
    $('#bench-instruction').text(s.gt_instruction || '(not available)');
    renderVideoGallery('#bench-video-container', s.views, s.sample_id, { compact: true });

    // Capability badges
    var $tags = $('#bench-cap-tags').empty();
    Object.keys(labels).forEach(function (cap) {
      var count = s.capability_summary[cap] || 0;
      var cls = count > 0 ? 'tag is-success' : 'tag is-light';
      $tags.append('<span class="' + cls + '" style="margin:2px;">' + labels[cap] + ' (' + count + ')</span> ');
    });

    // Atomic facts accordion
    var $accordion = $('#bench-facts-accordion').empty();
    var factsByCapability = {};
    s.atomic_facts_sample.forEach(function (f) {
      if (!factsByCapability[f.capability]) factsByCapability[f.capability] = [];
      factsByCapability[f.capability].push(f);
    });
    Object.keys(labels).forEach(function (cap) {
      var facts = factsByCapability[cap] || [];
      if (facts.length === 0) return;
      var totalCount = s.capability_summary[cap];
      var factsHtml = '<ul>';
      facts.forEach(function (f) {
        factsHtml += '<li><span class="tag is-light is-small" style="margin-right:4px;">' + f.slot + ': ' + f.value + '</span> ' + f.fact_text + '</li>';
      });
      factsHtml += '</ul>';
      $accordion.append(
        '<div class="bench-fact-group">' +
        '<button class="bench-fact-toggle button is-small is-light is-fullwidth">' +
        '<span class="icon"><i class="fas fa-chevron-right"></i></span>' +
        '<span>' + labels[cap] + ' (' + totalCount + ' facts)</span>' +
        '</button>' +
        '<div class="bench-fact-list" style="display:none;">' + factsHtml + '</div>' +
        '</div>'
      );
    });

    // Accordion toggle
    $('.bench-fact-toggle').off('click').on('click', function () {
      $(this).toggleClass('is-expanded');
      $(this).find('.icon i').toggleClass('fa-chevron-right fa-chevron-down');
      $(this).next('.bench-fact-list').slideToggle(200);
    });

    // VQA questions
    var $vqa = $('#bench-vqa-cards').empty();
    function buildQaCard(qa, qi) {
      var optionsHtml = '';
      if (qa.options && qa.options.length > 0) {
        qa.options.forEach(function (opt) {
          optionsHtml += '<label class="radio" style="display:block;margin-bottom:4px;"><input type="radio" name="bench-q' + idx + '-' + qi + '" disabled> ' + opt + '</label>';
        });
      } else {
        optionsHtml = '<p class="has-text-grey">Yes / No</p>';
      }
      var capLabel = labels[qa.capability] || qa.capability;
      return (
        '<div class="card bench-qa-card" style="margin-bottom:1rem;">' +
        '<div class="card-content">' +
        '<div class="tags" style="margin-bottom:0.5rem;"><span class="tag is-info is-light">' + capLabel + '</span></div>' +
        '<p class="bench-question"><strong>Q:</strong> ' + qa.question + '</p>' +
        '<div class="bench-options" style="margin:0.5rem 0 0.75rem 1rem;">' + optionsHtml + '</div>' +
        '<button class="button is-small is-info bench-reveal-btn">Reveal Answer</button>' +
        '<p class="bench-answer" style="display:none;margin-top:0.75rem;">' +
        '<span class="tag is-success is-medium">Answer: ' + qa.answer + '</span>' +
        '</p>' +
        '</div></div>'
      );
    }

    if (s.qas.length > 0) {
      $vqa.append(buildQaCard(s.qas[0], 0));
    }

    if (s.qas.length > 1) {
      var extraHtml = '';
      s.qas.slice(1).forEach(function (qa, offset) {
        extraHtml += buildQaCard(qa, offset + 1);
      });
      $vqa.append(
        '<details class="bench-vqa-more">' +
        '<summary><span>Show All VQA Questions (' + (s.qas.length - 1) + ' more)</span><span class="bench-vqa-summary-arrow" aria-hidden="true"><i class="fas fa-chevron-down"></i></span></summary>' +
        '<div class="bench-vqa-more-body">' + extraHtml + '</div>' +
        '</details>'
      );
    }

    $('.bench-reveal-btn').off('click').on('click', function () {
      $(this).hide();
      $(this).next('.bench-answer').slideDown(200);
    });
  }

  // ===== SIMULATION COMPARISON =====
  var SIM_TASKS = [
    {task: "hanging_mug", label: "Hanging Mug", instruction: "Hang the mug on the rack."},
    {task: "blocks_ranking_size", label: "Blocks Ranking (Size)", instruction: "Place large block, medium block, and small block at the table center, largest to smallest."},
    {task: "handover_block", label: "Handover Block", instruction: "Grab the red block with the left arm."},
    {task: "put_bottles_dustbin", label: "Put Bottles in Dustbin", instruction: "Pick up the yellow plastic bottle, drop it into the curved rectangular trash can, then repeat for the plastic bottle and the bottle with red screw cap."},
    {task: "blocks_ranking_rgb", label: "Blocks Ranking (RGB)", instruction: "Set red block on the left, then green block in the center, and finally blue block on the right."},
    {task: "adjust_bottle", label: "Adjust Bottle", instruction: "Use the left arm to grab the green plastic bottle with ridged bottom."}
  ];

  function initSimComparison() {
    var $tabs = $('#sim-task-tabs ul');
    SIM_TASKS.forEach(function(t, i) {
      $tabs.append('<li class="' + (i===0?'is-active':'') + '"><a data-idx="' + i + '">' + t.label + '</a></li>');
    });
    renderSimTask(0);
    $tabs.on('click', 'a', function(e) {
      e.preventDefault();
      var idx = parseInt($(this).data('idx'));
      $tabs.find('li').removeClass('is-active');
      $(this).parent().addClass('is-active');
      renderSimTask(idx);
    });
  }

  function renderSimTask(idx) {
    var t = SIM_TASKS[idx];
    var $grid = $('#sim-video-grid').empty();
    var conditions = [
      {key: 'fg_clean', label: 'FG:Raw=1:1 (Clean)', success: true},
      {key: 'raw_clean', label: 'Raw-only (Clean)', success: false},
      {key: 'fg_random', label: 'FG:Raw=1:1 (Random)', success: true},
      {key: 'raw_random', label: 'Raw-only (Random)', success: false}
    ];
    var html = '';
    if (t.instruction) {
      html += '<div class="notification is-light" style="padding:0.75rem 1rem;margin-bottom:1rem;border-left:4px solid var(--accent-blue,#3b82f6);background:#f0f7ff;">' +
        '<p class="is-size-6"><strong>Language Instruction:</strong> <em>"' + t.instruction + '"</em></p></div>';
    }
    html += '<div class="columns is-multiline">';
    conditions.forEach(function(c) {
      var src = './static/videos/sim/' + t.task + '_' + c.key + '.mp4';
      var badge = c.success
        ? '<span class="tag is-success is-small">Success</span>'
        : '<span class="tag is-danger is-small">Fail</span>';
      html += '<div class="column is-half">' +
        '<div class="box" style="padding:0.75rem;">' +
        '<p class="is-size-7 has-text-weight-bold" style="margin-bottom:0.5rem;">' + c.label + ' ' + badge + '</p>' +
        '<video controls muted loop playsinline width="100%" style="border-radius:8px;">' +
        '<source src="' + src + '" type="video/mp4"></video>' +
        '</div></div>';
    });
    html += '</div>';
    $grid.html(html);
  }

  // ===== REAL-WORLD STEERABILITY DEMO =====
  var REAL_PAIRS = [
    {
      label: "Grasp Direction",
      attribute: "Approach direction",
      left: {file: "grasp_above", instruction: "Grasp the block from above, move it over the pink bowl, and release it."},
      right: {file: "grasp_right", instruction: "Grasp the block from the right side, move it over the pink bowl, and release it."}
    },
    {
      label: "Left / Right Hand",
      attribute: "Hand selection",
      left: {file: "left_pick_left_place", instruction: "Pick up the block with the left hand and place it into the left bowl."},
      right: {file: "right_pick_right_place", instruction: "Pick up the block with the right hand and place it into the right bowl."}
    },
    {
      label: "Object State",
      attribute: "Object orientation",
      left: {file: "pick_the_lying", instruction: "Pick up the cup lying on the table and place it into the box."},
      right: {file: "pick_the_stand", instruction: "Pick up the standing cup on the table and place it into the box."}
    },
    {
      label: "Object Color",
      attribute: "Target color",
      left: {file: "pick_blue_pen", instruction: "Put the blue pen into the pen cup."},
      right: {file: "pick_red_pen", instruction: "Put the red pen into the pen cup."}
    },
    {
      label: "Rotation Direction",
      attribute: "Rotation direction",
      left: {file: "rotate_clockwise", instruction: "Rotate the pen clockwise for 90 degrees."},
      right: {file: "rotate_counterclockwise", instruction: "Rotate the pen counter-clockwise for 90 degrees."}
    }
  ];

  function initRealWorld() {
    var $tabs = $('#real-task-tabs ul');
    REAL_PAIRS.forEach(function(p, i) {
      $tabs.append('<li class="' + (i===0?'is-active':'') + '"><a data-idx="' + i + '">' + p.label + '</a></li>');
    });
    renderRealPair(0);
    $tabs.on('click', 'a', function(e) {
      e.preventDefault();
      var idx = parseInt($(this).data('idx'));
      $tabs.find('li').removeClass('is-active');
      $(this).parent().addClass('is-active');
      renderRealPair(idx);
    });
  }

  function renderRealPair(idx) {
    var p = REAL_PAIRS[idx];
    var $grid = $('#real-video-grid').empty();
    var html = '<div class="columns">';
    [p.left, p.right].forEach(function(item) {
      var src = './static/videos/real/' + item.file + '.mp4';
      html += '<div class="column is-half" style="display:flex;">' +
        '<div class="box" style="padding:0.75rem;width:100%;display:flex;flex-direction:column;">' +
        '<div class="notification is-light" style="padding:0.5rem 0.75rem;margin-bottom:0.5rem;border-left:4px solid var(--accent-blue,#3b82f6);background:#f0f7ff;flex:0 0 auto;min-height:3.5em;display:flex;align-items:center;">' +
        '<p class="is-size-7"><strong>Instruction:</strong> <em>"' + item.instruction + '"</em></p></div>' +
        '<video controls muted loop playsinline width="100%" style="border-radius:8px;flex:1 1 auto;">' +
        '<source src="' + src + '" type="video/mp4"></video>' +
        '</div></div>';
    });
    html += '</div>';
    $grid.html(html);
  }

  // ===== Initialize all demos =====
  if (typeof DEMO_DATA !== 'undefined') {
    initRecap();
    initVLM();
    initBenchmark();
  }
  initSimComparison();
  initRealWorld();
});
