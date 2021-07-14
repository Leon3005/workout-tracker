# Help for the Homework 18

## A mixture of hints, and guidance:

In this homework we've been given all of the frontend code, we just need to make sure that this is hooked up correctly. We have a few user stories, but we need to provide the backend.

**YOU DO NOT NEED TO EDIT THE FRONTEND CODE**

---

The links to creating a Mongo DB Atlas account are in the README but also again here:

- [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)
- [Deploy with Heroku and MongoDB Atlas](../04-Important/MongoAtlas-Deploy.md)

---

There's already a seed file that is given to us so we need to ensure we have a schema in our local mongo server called `workout` otherwise this script won't run.

You should only need one model for this file. Your file structure should look like:

```

workout-tracker/
	src/
		models/
			index.js
			workout.js
		public/
			... everything we had given to us
		controllers/
			api/
				index.js
		routes/
			api/
				index.js
			html/
				index.js
		seeders/
			... everything we get given
		server.js
	package.json
	README.md

```

We should be making use of the aggregate functions when we want various data from the workouts.

### Specific things for Homework 18:

1. You MUST submit a deployed application - this includes having a working Mongo DB in Mongo Atlas
2. Application MUST use MongoDB for it's database
3. Application MUST use Mongoose for it's schema creation
4. Application MUST use Express to handle the routes
5. The application MUST allow the user to create NEW workout routines
6. The application MUST allow users to continue a PREVIOUS workout routine
7. Application MUST allow the user to EDIT previous workout routines
8. Application MUST allow user to VIEW workout data in the Stats page.
9. Application MUST follow best practice for File Structure and Naming conventions
10. Application must follow best practice for Variable and Function naming, indentation and commenting
11. Repository contains quality README with description, screenshot and link to deployed application.
