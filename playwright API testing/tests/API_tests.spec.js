import { test, expect } from '../fixtures/apiFixture';
import { postData } from '../data/postsData';

import {
    verifyStatusCode,
    verifyProperty,
    verifyArray,
    verifyArrayNotEmpty
} from '../utils/apiAssertions';


test.describe('Posts API Testing', () => {


    // =======================
    // GET API Request
    // =======================

    test('API get request', async ({ postsAPI }) => {

        const response = await postsAPI.getPostById(2);

        await verifyStatusCode(response, 200);

        const responseBody = await response.json();

        await verifyProperty(
            responseBody,
            'id',
            2
        );

        await verifyProperty(
            responseBody,
            'title',
            'API Testing'
        );

        await verifyProperty(
            responseBody,
            'body',
            'Learning GET Request'
        );

        await verifyProperty(
            responseBody,
            'userId',
            2
        );

        console.log(responseBody);

    });


    // =======================
    // GET All Posts
    // =======================

    test('API get all posts request', async ({ postsAPI }) => {

        const response = await postsAPI.getAllPosts();

        await verifyStatusCode(response, 200);

        const posts = await response.json();

        await verifyArray(posts);

        await verifyArrayNotEmpty(posts);

        console.log("All Posts:");
        console.log(posts);

        console.log(
            "Total Posts:",
            posts.length
        );

    });


    // =======================
    // POST API Request
    // =======================

    test('API post request', async ({ postsAPI }) => {

        const response = await postsAPI.createPost(
            postData.createPost
        );

        await verifyStatusCode(response, 201);

        const responseBody = await response.json();

        await verifyProperty(
            responseBody,
            'title',
            postData.createPost.title
        );

        await verifyProperty(
            responseBody,
            'body',
            postData.createPost.body
        );

        await verifyProperty(
            responseBody,
            'userId',
            postData.createPost.userId
        );

        console.log(responseBody);

    });


    // =======================
    // PUT API Request
    // =======================

    test('API put request', async ({ postsAPI }) => {

        const response = await postsAPI.updatePost(
            1,
            postData.updatePost
        );

        await verifyStatusCode(response, 200);

        const responseBody = await response.json();

        await verifyProperty(
            responseBody,
            'id',
            postData.updatePost.id
        );

        await verifyProperty(
            responseBody,
            'title',
            postData.updatePost.title
        );

        await verifyProperty(
            responseBody,
            'body',
            postData.updatePost.body
        );

        await verifyProperty(
            responseBody,
            'userId',
            postData.updatePost.userId
        );

        console.log(responseBody);

    });


    // =======================
    // DELETE Last Post
    // =======================

    test('API delete last post request', async ({ postsAPI }) => {

        const result = await postsAPI.deleteLastPost();

        expect([200, 204])
            .toContain(
                result.deleteResponse.status()
            );

        console.log(
            "Deleted Post:",
            result.lastPost
        );

        console.log(
            "Deleted Successfully"
        );

    });


    // =======================
    // GET Invalid Post ID
    // =======================

    test('API get post with invalid ID', async ({ postsAPI }) => {

        const response = await postsAPI.getPostById(9999);

        await verifyStatusCode(response, 404);

        console.log(
            "Invalid Post ID - Status:",
            response.status()
        );

    });


    // =======================
    // GET All Posts - Required Properties
    // =======================

    test('API verify required properties in all posts', async ({ postsAPI }) => {

        const response = await postsAPI.getAllPosts();

        await verifyStatusCode(response, 200);

        const posts = await response.json();

        await verifyArray(posts);

        await verifyArrayNotEmpty(posts);

        for (const post of posts) {

            await verifyProperty(
                post,
                'id',
                post.id
            );

            await verifyProperty(
                post,
                'title',
                post.title
            );

            await verifyProperty(
                post,
                'body',
                post.body
            );

            await verifyProperty(
                post,
                'userId',
                post.userId
            );

        }

        console.log(
            "All posts contain required properties"
        );

    });


    // =======================
    // PUT Invalid Post ID
    // =======================

    test('API update post with invalid ID', async ({ postsAPI }) => {

        const response = await postsAPI.updatePost(
            9999,
            postData.updatePost
        );

        await verifyStatusCode(response, 404);

        console.log(
            "Invalid Post ID - Status:",
            response.status()
        );

    });


    // =======================
    // DELETE Invalid Post ID
    // =======================

    test('API delete post with invalid ID', async ({ postsAPI }) => {

        const response = await postsAPI.deletePost(9999);

        await verifyStatusCode(response, 404);

        console.log(
            "Invalid Post ID - Status:",
            response.status()
        );

    });


}); l