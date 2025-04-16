import RecipeImg from "@/assets/templates/recipe.png";

export const recipeTemplate = {
  id: "recipe",
  title: "Recipe",
  description: "Store and easily access your favorite recipes with ingredients, instructions, and cooking details.",
  thumbnail: RecipeImg,
  content: {
    blocks: [
      {
        type: "header",
        data: {
          level: 2,
          text: "Chocolate Chip Cookies",
        },
      },
      {
        type: "table",
        data: {
          content: [
            ["Prep Time:", "15 minutes"],
            ["Cook Time:", "10-12 minutes"],
            ["Servings:", "About 2 dozen cookies"],
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Ingredients:",
        },
      },
      {
        type: "list",
        data: {
          style: "unordered",
          items: [
            "1 cup (2 sticks) unsalted butter, softened",
            "¾ cup granulated sugar",
            "¾ cup packed brown sugar",
            "2 large eggs",
            "1 teaspoon vanilla extract",
            "2 ¼ cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 teaspoon salt",
            "2 cups semi-sweet chocolate chips",
          ],
        },
      },
      {
        type: "header",
        data: {
          level: 3,
          text: "Instructions:",
        },
      },
      {
        type: "list",
        data: {
          style: "ordered",
          items: [
            "Preheat oven to 375°F (190°C).",
            "Cream together the butter, granulated sugar, and brown sugar until smooth.",
            "Beat in the eggs one at a time, then stir in the vanilla extract.",
            "In a separate bowl, whisk together the flour, baking soda, and salt.",
            "Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
            "Stir in the chocolate chips.",
            "Drop rounded tablespoons of dough onto ungreased baking sheets.",
            "Bake for 10-12 minutes, or until edges are golden brown.",
            "Let cool on baking sheets for a few minutes before transferring to a wire rack to cool completely.",
          ],
        },
      },
    ],
  },
};
