export class UserService {
    async fetchData(url) {
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            return data
        } catch (error) {
            return console.log('Ошибка данных с сервера', error)
        }
    }

    async sendData(url, method, data) {
        try {
            const option = {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },

            }
            if (data) {
                option.body = JSON.stringify(data)
            }

            const response = await fetch(url, option)
            const result = await response.json()
            console.log(result)
            return result
        } catch (error) {
            return console.log('Ошибка при отправке данных', error)

        }
    }

    // fetchData
    // sendData
    getUsers() {
        return this.fetchData('http://localhost:2108/users')
    }

     addUser(user) {
        return this.sendData('http://localhost:2108/users','POST', user)
    }

     removeUser(id) {
        return this.sendData(`http://localhost:2108/users/${id}`, 'DELETE')
    }

     changeUser(id, data) {
        return this.sendData(`http://localhost:2108/users/${id}`, 'PATCH', data)
    }

     getUser(id) {
        return this.fetchData(`http://localhost:2108/users/${id}`)
    }

     editUser(id, user) {
        return this.sendData(`http://localhost:2108/users/${id}`,'PUT', user)
    }

     filterUsers(filterOption) {
        return this.fetchData(`http://localhost:2108/users?${filterOption}=true`)
    }

     getSortUsers(sortOption) {
        return this.fetchData(`http://localhost:2108/users?_sort=${sortOption.name}&_order=${sortOption.value}`)
    }

     getSearchUsers(str) {
        return this.fetchData(`http://localhost:2108/users?name_like=${str}`)
    }
}