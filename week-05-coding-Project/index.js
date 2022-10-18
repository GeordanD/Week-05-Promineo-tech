class Games{
    constructor(name, genre, console) {
        this.name = name;
        this.genre = genre;
        this.console = console;
    }
    describe() {
        return `${this.name} is an ${this.genre} on ${this.console}.`;
    }
}

class Console{
    constructor(name) {
        this.name = name;
        this.console = [];
    }

    addGame(game) {
        if (game instanceof Games) {
            this.games.push(games);
        } else {
            throw new Error(`You can only add an instance of Games. Argument is not a Game ${game}`);
        }
    }

    describe() {
        return `${this.name} has ${this.games.length} games.`;
    }
}

class Menu {
    constructor() {
        this.game = [];
        this.selectedConsole = null;
    }


    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createConsole();
                    break;
                case '2':
                    this.viewConsole();
                    break;
                case '3':
                    this.deleteConsole();
                    break;
                case '4':
                    this.displayConsole();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
    
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new console
        2) view console
        3) delete console
        4) display all console
        `);
    }

    showConsoleMenuOptions(consoleInfo) {
        return prompt(`
        0) back
        1) add game
        2) delete game
        ---------------
        ${consoleInfo}
        `);
    }

    displayConsole() {
        let consoleString = "";
        for (let i = 0; i < this.console.length; i++) {
            consoleString += i + ") " + this.console[i].name + '\n';
        }
        alert(teamString);
    }

    createConsole() {
        let name = prompt('Enter name for new console:');
        this.console.push(new console(name));
    }


    viewConsole() {
        let index = prompt('Enter the index of the console you wish to view: ');
        if (index > -1 && index < this.console.length) {
            this.selectedConsole = this.console[index];
            let description = 'Console Name: ' + this.selectedConsole.name + '\n';

            for (let i = 0; i < this.selectedConsole.game.length; i++) {
                description += i + ') ' + this.selectedConsole.game[i].position + '\n';
            }

            let selection = this.showConsoleMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createGame();
                    break;
                case '2':
                    this.deleteGame();
            }
        }
    }
}

let menu = new Menu();
menu.start();
