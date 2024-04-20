# Svelte Avatar Quiz App
![image](https://github.com/tonexie/avatar-character-test/assets/131140622/434d300a-48b0-4234-8bd0-ce37ba4c030f)

Welcome to the Svelte Avatar Quiz App! This application uses Svelte integrated with the Flowbite UI component library to deliver a fun and interactive web application. My app features a dynamic quiz platform, a results page utilizing Svelte's slug routing, an search page with API integration to a TV database, and a visually appealing credits page.
Check out the live site! https://avatar-character-quiz.netlify.app/

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Installation Guide](#installation-guide)
- [Feature Walkthrough](#feature-walkthrough)
  - [Landing Page and Dynamic Background](#landing-page)
  - [Quiz Page](#quiz-page)
  - [Results Page](#results-page)
  - [TV Info Page](#tv-info-page)
  - [Credits Page](#credits-page)
- [References](#references)

## Project Overview

This project aims to create an engaging Avatar-themed quiz experience that sorts users into different character profiles from the popular TV show based on their responses. The application showcases modern web development practices and demonstrates the effective use of component-based architecture.

## Technology Stack

- **Svelte**: A modern frontend framework.
- **Flowbite**: A UI component library for Svelte. I used it extensively throughout my app, including building a theme selector.
- **Tailwind CSS**: A utility-first CSS framework.
- **Node.js**: JavaScript runtime.

## Installation Guide (Alternatively there is a live demo link above to view site)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-tonexie
   cd ./cs732-assignment-tonexie
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```

## Feature Walkthrough

### Landing Page

Entry point to application, with giant hero image.

#### Svelte Components Used
- **BackgroundImg**: This component displays a background image. It is located in `$lib/components/background/BackgroundImg.svelte`.
- **StartTest**: A component that displays the start button for the quiz. It is located in `$lib/components/home/StartTest.svelte`.

#### Implementation
My landing page component:
```svelte
<script>
	import BackgroundImg from '$lib/components/background/BackgroundImg.svelte';
	import StartTest from '$lib/components/home/StartTest.svelte';
</script>

<div class="flex flex-col overflow-hidden">
	<BackgroundImg image="./images/avatar-hero-v2.jpg" />
	<StartTest />
</div>

```
The background image on certain pages of the application is dynamic, changing randomly or upon a defined prop. Svelte store (backgroundImageStore) is used to keep track of the current background image. This allows the background to remain consistent across rerouting when desired.

```svelte
import { backgroundImageStore } from '$lib/data/backgroundStore.js';
import imageUrls from '$lib/components/background/backgroundImgs.js';

	export let image;
	export let refresher = 0;

	function getRandomImage() {
		let randomImage;
		do {
			const randomIndex = Math.floor(Math.random() * imageUrls.length);
			randomImage = imageUrls[randomIndex];
		} while (randomImage === $backgroundImageStore);
		backgroundImageStore.set(randomImage);
		return randomImage;
	}
```

### Quiz Page

The core of my application. It handles the user interactions in the quiz section and runs an algorithm on them to determine the right avatar charater. It also dynamically displays quiz questions, records user responses, and navigates through the quiz.


#### Implementation

1. **Dynamic Question Rendering**:
   Questions are rendered based on the current question index (`currQ`). This index is incremented after each response, updating the displayed question.

   ```svelte
   {#if currQ < questions.length}
       <div class="flex justify-center items-center h-screen">
           ...
           <p>{questions[currQ].scenario}</p>
           ...
       </div>
   {/if}
   ```
1. Handling User Input
   User responses are captured via radio buttons bound to the rating variable.

    ```svelte
    {#each [1, 2, 3, 4, 5] as rate}
        <Radio name="group1" bind:group={rating} value={rate} />
        <Label>{@html options[rate - 1]}</Label>
    {/each}
    ```

2. Submission and Transition:
   Upon submitting a response, the handleSubmit function is called. This function processes the current answer, determines if the quiz should proceed to the next question or end, and handles navigation to the results page if the quiz is completed.

```svelte
<script>
	async function handleSubmit() {
			try {
				if (currQ < questions.length) {
					processUserAnswer();
					dispatch('next');
				}
				if (currQ === questions.length) {
					const character = determineUserCharacter();
					await preloadImages([`/portraits/${character.slug}-portrait.webp`]);
					goto(`/result/${character.slug}`);
				}
			} catch (error) {
				console.error('Error in handleSubmit:', error);
			}
		}
</script>

<form on:submit|preventDefault={handleSubmit}>
    <Button type="submit" disabled={!rating}>Next Question</Button>
</form>
```
If it’s the final question, the function calculates the character that best matches the user's answers by evaluating the scores updated during the quiz:

```javascript

function determineUserCharacter() {
		const lowestScoreList = $userAnswers.reduce(
			(acc, curr) => {
				const value = Object.values(curr)[0];
				if (value < acc.minValue) {
					acc.minValue = value;
					acc.minObjects = [curr];
				} else if (value === acc.minValue) {
					acc.minObjects.push(curr);
				}
				return acc;
			},
			{ minValue: Infinity, minObjects: [] }
		);
		const characterResult =
			lowestScoreList.minObjects[Math.floor(Math.random() * lowestScoreList.minObjects.length)];
		return characterResult;
	}
```

The component also uses Svelte's built in animations for a fade transition to animate the entrance of the question card.

```svelte
in:fade={{ delay: 600, duration: 500 }}
```

### Results Page

Utilizes dynamic routes (slugs) to display personalized results based on user answers. Here, the URL reflects the character outcome, e.g., `/result/aang`.

![image](https://github.com/tonexie/avatar-character-test/assets/131140622/b8e50580-ba76-4ca0-ba76-d7018963b803)

### TV Info Page

Displays TV information about the "Avatar: The Last Airbender" series fetched from an external API: TMDB. Includes a search function to query information on other TV shows.

The API call is done through a GET request using fetch:
``` javascript
async function searchTVShows(query) {
    const url = `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(query)}&...`;
    const headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Accept': 'application/json'
    };
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
}
```
The search results are stored in the tvShows array and displayed using Svelte's {#each} block. Each show is rendered inside a Card component from flowbite-svelte.
``` svelte
{#each tvShows as show}
  <Card img={`https://image.tmdb.org/t/p/w500${show.poster_path}`} ...>
    <h3>{show.original_name}</h3>
    <p>{show.overview}</p>
    <p><strong>Air Date:</strong> {show.first_air_date}</p>
    <p><strong>Rating:</strong> {show.vote_average} ({show.vote_count} votes)</p>
  </Card>
{/each}
```
### Credits Page

Credits all my image sources and the API provider.
![image](https://github.com/tonexie/avatar-character-test/assets/131140622/f11e0e2c-924b-462f-bdaa-8e8f6c22b838)


## References

- [Svelte Documentation](https://svelte.dev/docs)
- [Flowbite Official Site](https://flowbite.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

