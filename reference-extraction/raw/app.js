  // Header scroll shadow
  (() => {
    const h = document.getElementById('header');
    const onScroll = () => h.classList.toggle('scrolled', window.scrollY > 8);
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  // Mobile drawer + accordion
  (() => {
    const hamburger = document.querySelector('.hamburger');
    const drawer = document.querySelector('[data-drawer]');
    const backdrop = document.querySelector('[data-drawer-backdrop]');
    const closeBtn = document.querySelector('[data-drawer-close]');
    if (!drawer) return;

    const open = () => {
      drawer.classList.add('is-open');
      backdrop.classList.add('is-open');
      hamburger?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      drawer.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      hamburger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    hamburger?.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    backdrop?.addEventListener('click', close);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
    });

    // Accordion
    drawer.querySelectorAll('.mobile-nav-item__trigger').forEach(t => {
      t.addEventListener('click', () => {
        const item = t.closest('.mobile-nav-item');
        const open = item.classList.toggle('is-open');
        t.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });

    // Close drawer when clicking any link inside
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (drawer.classList.contains('is-open')) close();
      });
    });
  })();

  // Sticky mobile CTA bar â show after scrolling past hero, hide near footer
  (() => {
    const bar = document.querySelector('[data-cta-bar]');
    if (!bar) return;
    const hero = document.querySelector('#hero');
    const footer = document.querySelector('#footer');

    let last = false;
    const onScroll = () => {
      const heroH = hero?.offsetHeight || 600;
      const pastHero = window.scrollY > heroH * 0.6;
      const footerTop = footer?.getBoundingClientRect().top ?? Infinity;
      const nearFooter = footerTop < window.innerHeight - 80;
      const should = pastHero && !nearFooter;
      if (should !== last) { bar.classList.toggle('is-show', should); last = should; }
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  })();
