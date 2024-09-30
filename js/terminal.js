$(document).ready(function() {
    const commands = ['help', 'about', 'skills', 'resume', 'social', 'clear'];

    $('#terminal').terminal(function(command, term) {
        if (command !== '') {
            switch(command.toLowerCase()) {
                case 'help':
                    term.echo("<span class='command-text'>Available commands:</span>\n<ul class='command-list'>"
                        + "<li>help - Show this help message</li>"
                        + "<li>about - About Me</li>"
                        + "<li>skills - Skills</li>"
                        + "<li>resume - Download Resume</li>"
                        + "<li>social - Social Links</li>"
                        + "<li>clear - Clear the terminal</li>"
                        + "</ul>", { raw: true });
                    break;
                case 'about':
                    term.echo("Redirecting to About Me page...");
                    window.location.href = 'assets/about.html';
                    break;
                case 'skills':
                    term.echo("Redirecting to Skills page...");
                    window.location.href = 'assets/skills.html';
                    break;
                case 'resume':
                    term.echo("Redirecting to Resume...");
                    window.location.href = "../Kailan-interactive-portfolio/sources/kailan-naidoo-resume.pdf";
                    break;
                case 'social':
                    term.echo("<span class='command-text'>Fetching social links...</span>", { raw: true });
                    term.echo("GitHub: https://github.com/Knaidoo2: https://linkedin.com/in/yourusername");
                    break;
                case 'clear':
                    term.clear();
                    break;
                default:
                    term.echo("Command not found. Type 'help' to see available commands.");
            }
        } else {
            term.echo("Type 'help' to see available commands.");
        }
    }, 
    
    {
        greetings: 'Welcome to my interactive terminal!\nType "help" to get started.',
        name: 'interactive_terminal',
        height: '100%',
        prompt: 'Kailan-Naidoo@portfolio:~$ ',
        completion: function(string, callback) {
            callback($.grep(commands, function(command) {
                return command.startsWith(string);
            }));
        },

        // Add a custom CSS class for styling
    className: 'custom-terminal'

    });
});

$(document).ready(function() {
    $('#start-terminal-btn').on('click', function() {
        $('#interactive-terminal-container').toggle();
    });
});

