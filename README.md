# clipboard-js
Clipboard js class

<p>Allows you to associate a clipboard button with a specific container to copy its text.</p>

<p>Example:</p>

<pre>
<code>
    const example_1 = document.getElementById('example_1');
    const example_2 = document.getElementById('example_2');
    
    new Clipboard({container: example_1});
    
    new Clipboard({container: example_2, copy_text: 'Copiar', copied_text: 'Copiado!'});
</code>
</pre>
