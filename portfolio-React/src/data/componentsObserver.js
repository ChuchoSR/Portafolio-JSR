document.addEventListener('DOMContentLoaded', () => {
    const observeOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries) => { 
        entries.forEach(entry => { 
            if (entry.isIntersecting) { 
                if (entry.target.classList.contains('slide-left')) {
                    entry.target.classList.add('animate-slide-in-left'); 
                    entry.target.classList.remove('animate-slide-out-left');
                } else if (entry.target.classList.contains('slide-right')) {
                    entry.target.classList.add('animate-slide-in-right'); 
                    entry.target.classList.remove('animate-slide-out-right');
                } 
            } else { 
                if (entry.target.classList.contains('slide-left')) { 
                    entry.target.classList.remove('animate-slide-in-left');
                    entry.target.classList.add('animate-slide-out-left'); 
                } else if (entry.target.classList.contains('slide-right')) { 
                    entry.target.classList.remove('animate-slide-in-right');
                    entry.target.classList.add('animate-slide-out-right');
                } 
            } 
        }); 
    }; 

    const observer = new IntersectionObserver(observerCallback, observeOptions); 
    const targets = document.querySelectorAll('.slide-left, .slide-right'); 
    targets.forEach(target => observer.observe(target)); 
});
