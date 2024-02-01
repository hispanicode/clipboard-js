const Clipboard = class {
    
    constructor(options) {
        
        if (typeof options.copy_text === 'undefined') {
            
            options.copy_text = 'Copy';
            
        }
        
        if (typeof options.copied_text === 'undefined') {
            
            options.copied_text = 'Copied!';
            
        }
        
        if (typeof options.container === 'undefined') {
            
            console.log('clipboard.js: Container not allocated in options');
            return;
            
        }
        
        let go_back = false;
        
        if (typeof options.with_message === 'undefined') {
            
            options.with_message = options.copy_text;

        } else {
            
            go_back = true;
            
        }

        const button = document.createElement('button');
        button.type = 'button';
        button.innerText = options.with_message;
        button.classList.add('clipboard');
        
        if (go_back) {
            
            button.classList.add('clipboard-copied');
            
            window.setTimeout(function() {
                
                button.innerText = options.copy_text;
                button.classList.remove('clipboard-copied');
                button.style.top = (options.container.offsetTop - button.getBoundingClientRect().height ) +'px';
                button.style.left = (options.container.getBoundingClientRect().width - (button.getBoundingClientRect().width)) + 'px';
            }, 2000);
            
        }

        options.container.appendChild(button);

        button.style.position = 'absolute';
        button.style.top = (options.container.offsetTop - button.getBoundingClientRect().height ) +'px';
        button.style.left = (options.container.getBoundingClientRect().width - (button.getBoundingClientRect().width)) + 'px';

        window.addEventListener('resize', function() {
            
            button.style.top = (options.container.offsetTop - button.getBoundingClientRect().height ) +'px';
            button.style.left = (options.container.getBoundingClientRect().width - (button.getBoundingClientRect().width)) + 'px';

        });

        button.addEventListener('click', function() {

            this.remove();

            navigator.clipboard.writeText(options.container.innerText);
            
            options.with_message = options.copied_text;
            
            new Clipboard(options);

        });

    }
    
};


