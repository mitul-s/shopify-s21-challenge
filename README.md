## Overview
Hi there Shopifolk! Check out the live demo of the challenge by clicking here 👉 [https://voteshoppies.netlify.app/](https://voteshoppies.netlify.app/). I enjoyed building this, and I hope you like what you see. 

**My name is Mitul, and I'd be thrilled to join the mission to make commerce better for everyone 🚀** (psst, you might have seen my photos on [Shopify Burst](https://burst.shopify.com/@typicalmitul))

## Technical Requirements
This application was built using ReactJS and `Theme-UI`, which allowed me to build a custom theme based on Shopify's Polaris. 
1. A user can search the OMDB and will dynamically be displayed the search results of movies only. There's a loading state while the API is making a request (see `useRequest` custom hook.)
3. They are able to add movies to their nomination list. Once a movie has been nominated, the nominate button is disabled 
4. They can either clear all nominations or individually remove a nomination
5. Once a user has submitted five nominations, all nominate buttons are disabled and there's a banner to indicate they've completed (+ confetti)


## Extras
 * **Everyone loves confetti** 
	 * Microinteractions have always been interesting to myself (and many others) when building user experiences. In order to include this, I popped some `react-confetti` once a user had chosen five nominations
 * **Change themes**
	 * To make things more interesting, a user can toggle between themes that they prefer while making their nominations
 * **Save your lists**
	 * LocalStorage helped with ensuring that if the user had to leave the page, their nominations as well as their preferred theme would be saved
* **Empty States**
    * Depending on state of their search query or nominations, there's a different illustration and empty state to indicate what their next steps should be
* **100 Accessibility Score**

#### Next iteration
* The mobile experience isn't the best as the nominations are hidden below once a user makes a search, therefore having to scroll far. It would be worth improving this experience so that the user can see both search results and nominations either together or on independent pages. 
* A modal to confirm if a user truly wants to clear all nominations, and a modal to indicate they've completed five nominations 