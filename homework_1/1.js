class User {
    constructor(name, email, role) {
        this.name = name;
        this.role = role;
        this.email = email;
    }

    login() {
        console.log(`Пользователь ${this.name} вошел в систему`);
    }

    logout() {
        console.log(`Пользователь ${this.name} вышел из системы`);
    }
}

class Admin extends User {
    deleteUser(user) {
        console.log(`Пользователь ${user.name} был удален администратором ${this.name}`);
    }
}

const user = new User('ivan', 'ivan@mail', 'def_user')
const admin = new Admin('petya', 'petya@mail', 'admin')

user.login()
user.logout()
admin.deleteUser(user)
