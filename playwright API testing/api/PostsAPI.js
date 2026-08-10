import dotenv from 'dotenv';

dotenv.config();

export class PostsAPI {

    constructor(request) {

        this.request = request;
        this.baseURL = process.env.BASE_URL;

    }


    async getPostById(id) {

        const url = `${this.baseURL}/posts/${id}`;

        const response = await this.request.get(url);

        console.log(
            `[API] GET    ${url} → ${response.status()}`
        );

        return response;

    }


    async getAllPosts() {

        const url = `${this.baseURL}/posts`;

        const response = await this.request.get(url);

        console.log(
            `[API] GET    ${url} → ${response.status()}`
        );

        return response;

    }


    async createPost(data) {

        const url = `${this.baseURL}/posts`;

        const response = await this.request.post(url, {
            data
        });

        console.log(
            `[API] POST   ${url} → ${response.status()}`
        );

        return response;

    }


    async updatePost(id, data) {

        const url = `${this.baseURL}/posts/${id}`;

        const response = await this.request.put(url, {
            data
        });

        console.log(
            `[API] PUT    ${url} → ${response.status()}`
        );

        return response;

    }


    async deletePost(id) {

        const url = `${this.baseURL}/posts/${id}`;

        const response = await this.request.delete(url);

        console.log(
            `[API] DELETE ${url} → ${response.status()}`
        );

        return response;

    }


    async deleteLastPost() {

        const response = await this.getAllPosts();

        const posts = await response.json();

        const lastPost = posts[posts.length - 1];

        const deleteResponse = await this.deletePost(
            lastPost.id
        );

        return {
            lastPost,
            deleteResponse
        };

    }

}