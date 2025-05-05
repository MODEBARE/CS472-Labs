
class Exercise3 {
    #movies = new Map(); // key: genre (string), value: array of movies {id, title}

    add_genre(genre) {
        if (!this.#movies.has(genre)) {
            this.#movies.set(genre, []);
            return true;
        }
        return false;
    }

    add_movie_in_genre(genre, new_movie) {
        if (!this.#movies.has(genre)) return false;

        const movies = this.#movies.get(genre);
        if (movies.find(m => m.id === new_movie.id)) return false;

        movies.push(new_movie);
        return true;
    }

    update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
        if (!this.#movies.has(genre)) return false;

        const movies = this.#movies.get(genre);
        const movie = movies.find(m => m.id === movie_id);
        if (!movie) return false;

        movie.title = new_title;
        return true;
    }

    delete_movie_by_genre_and_movie_id(genre, movie_id) {
        if (!this.#movies.has(genre)) return false;

        const movies = this.#movies.get(genre);
        const index = movies.findIndex(m => m.id === movie_id);
        if (index === -1) return false;

        movies.splice(index, 1);
        return true;
    }

    get_movie_title_by_id(genre, movie_id) {
        if (!this.#movies.has(genre)) return '';

        const movie = this.#movies.get(genre).find(m => m.id === movie_id);
        return movie ? movie.title : '';
    }
}

// Test the class
const ex3 = new Exercise3();
console.log("Add genre 'thriller':", ex3.add_genre('thriller')); // true
console.log("Add genre 'comedy':", ex3.add_genre('comedy'));     // true
console.log("Add genre 'thriller' again:", ex3.add_genre('thriller')); // false

console.log("Add movie to thriller:", ex3.add_movie_in_genre('thriller', { id: '1', title: 'The American' })); // true
console.log("Add another movie to thriller:", ex3.add_movie_in_genre('thriller', { id: '2', title: 'Arcadian' })); // true
console.log("Duplicate movie id to thriller:", ex3.add_movie_in_genre('thriller', { id: '1', title: 'Duplicate' })); // false

console.log("Update title of movie in thriller:", ex3.update_movie_title_by_genre_and_movie_id('thriller', '2', 'Arcadia Revised')); // true
console.log("Update title of non-existent movie:", ex3.update_movie_title_by_genre_and_movie_id('thriller', '3', 'New Title')); // false

console.log("Get title by id:", ex3.get_movie_title_by_id('thriller', '2')); // 'Arcadia Revised'
console.log("Get title of non-existent movie:", ex3.get_movie_title_by_id('thriller', '3')); // ''

console.log("Delete movie in thriller:", ex3.delete_movie_by_genre_and_movie_id('thriller', '1')); // true
console.log("Delete non-existent movie:", ex3.delete_movie_by_genre_and_movie_id('thriller', '3')); // false
