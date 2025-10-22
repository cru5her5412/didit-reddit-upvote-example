## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers)
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair

## Post Project Reflection

- Please mention the requirements you met and which goals you achieved for this assignment.
  the base requirement and a few stretch goals
- Were there any requirements or goals that you were not quite able to achieve?
  some of the stretch goals I couldn't achieve with the time I had left
- If so, could you please tell us what was it that you found difficult about these tasks?
  ran out of time (missed morning session due to driving lesson)
- What went really well and what could have gone better?
  initial setup was smooth (other than a minor typo in the github app url that took me a few minutes to solve).
- Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
  next docs
- Describing errors or bugs you encountered while completing your assignment.
  had an issue where I couldn't redirect from my error page to the main page, due to that being where the error occured, upon looking at the workshop on error pages, I implemented reset() in place of the link I was using. another issue I had was as mentioned above, an issue with the url from the github app (I pasted the url in and ended up with 2 / where there was supposed to be one)
- Requesting feedback about a specific part of your submission.
  would there be a more elegant way to implement the error page so that it could redirect to the main page regardless of where the error occurred?

DevLog:
issues fixed:

- added a title tag to the individual post page to change it to match the post title <title>{post.title}</title>
- added an error.js file to get user to login or refresh the current page. Added page with brief description that an error occurred, and added a button to refresh the page(login button already present on page(description refers to button))
- added a constraint to the SQL database to prevent multiple votes from the same user on the same post (I think, not sure if it worked(i forgot to test before, just looked up how to implement a constraint in an existing table ('ALTER TABLE votes
  ADD UNIQUE(user_id,post_id) )'))
