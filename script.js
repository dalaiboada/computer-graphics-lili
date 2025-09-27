function showTab(algoritmo, tabType) {
    
    const contents = document.querySelectorAll(`#${algoritmo}-codigo, #${algoritmo}-demo, #${algoritmo}-explicacion`);
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(`${algoritmo}-${tabType}`).classList.add('active');

    const container = document.getElementById(`${algoritmo}-${tabType}`).closest('.demo-container');
    container.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
}


document.addEventListener('DOMContentLoaded', function() {

    const tabButtons = document.querySelectorAll('.demo-tabs .tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            
            const container = event.target.closest('.demo-container');
            const prefix = container.querySelector('[id$="-codigo"]').id.split('-')[0];

            let tabType;
            const buttonText = event.target.textContent.trim();

            if (buttonText.includes('Explicación')) {
                tabType = 'explicacion';
            } else if (buttonText.includes('Código')) {
                tabType = 'codigo';
            } else if (buttonText.includes('Demostración')) {
                tabType = 'demo';
            }
                        
            showTab(prefix, tabType);
            
            event.target.classList.add('active');
        });
    });
});