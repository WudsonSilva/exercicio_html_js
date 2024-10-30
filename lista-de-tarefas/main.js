$(document).ready(function(){
    $('#form-tarefa').on('submit', function(event) {
        event.preventDefault();

        const tarefa = $('#tarefa').val();

        if(tarefa) {
            const novoItem = $('<li></li>').text(tarefa);
            $('#lista-tarefas').append(novoItem);

            $('#tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    });
});