import { test as base } from '@playwright/test';
import { PostsAPI } from '../api/PostsAPI';


export const test = base.extend({

    postsAPI: async ({ request }, use) => {


        const postsAPI = new PostsAPI(request);
        console.log("Posts API Fixture Created");

        await use(postsAPI);


    },


});


export { expect } from '@playwright/test';