# Svelte Avatar Quiz App

Welcome to the Svelte Avatar Quiz App README! This application leverages Svelte integrated with the Flowbite UI component library to deliver a rich, interactive web application. Our app features a dynamic quiz platform, a results page utilizing Svelte's slug routing, an information page with API integration, and a visually appealing credits page.

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

- **Svelte**: A modern frontend compiler that provides a new approach to building user interfaces.
- **Flowbite**: A component library built on top of Tailwind CSS that provides ready-made components.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.

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
##### My landing page component:
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

#### Quiz Page

The core of my application. It handles the user interactions in the quiz section and runs an algorithm on them to determine the right avatar charater. It also dynamically displays quiz questions, records user responses, and navigates through the quiz.


#### Implementation Details

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
Animations and Transitions:
The component uses Svelte's fade transition to animate the entrance of the question card, making the quiz interaction visually appealing.

svelte

in:fade={{ delay: 600, duration: 500 }}


### Results Page

Utilizes dynamic routes (slugs) to display personalized results based on user answers. Here, the URL reflects the character outcome, e.g., `/results/aang`.

### TV Info Page

Displays detailed information about the "Avatar: The Last Airbender" series fetched from an external API. Includes a search function to query information on other TV shows.

### Credits Page

Credits all sources and provides aesthetic details about the development and design contributions.

## References

- [Svelte Documentation](https://svelte.dev/docs)
- [Flowbite Official Site](https://flowbite.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

