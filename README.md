# Portfolio - Valentin Lucarini

A minimalist, high-performance portfolio built with [Astro](https://astro.build).

## 🚀 Getting Started

1.  **Install dependencies**:
    ```sh
    npm install
    ```
2.  **Start the dev server**:
    ```sh
    npm run dev
    ```
3.  **Build for production**:
    ```sh
    npm run build
    ```

## 📝 Content Management

### Adding a New Project

Projects are stored as Markdown files in `src/content/projects/`.

1.  Create a new `.md` file in `src/content/projects/` (e.g., `my-new-project.md`).
2.  Add the Frontmatter (metadata) at the top of the file:

    ```markdown
    ---
    title: "Project Title"
    description: "Brief description of the project."
    cover: "/covers/your-image.png"
    order: 4
    ---
    ```

    -   **title**: The name of the project.
    -   **description**: A short summary shown on the card.
    -   **cover**: Path to the cover image (store images in `public/covers/`).
    -   **order**: Determines the display order (1, 2, 3, etc.).

3.  Write your content below the frontmatter using standard Markdown.

### Adding Charts (Vega-Lite)

You can embed interactive charts directly in your Markdown files using **Vega-Lite**.

1.  Create a code block with the language `vega`.
2.  Paste your Vega-Lite JSON specification inside.

**Example:**

````markdown
```vega
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"category": "A", "score": 28},
      {"category": "B", "score": 55},
      {"category": "C", "score": 43}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "category", "type": "nominal"},
    "y": {"field": "score", "type": "quantitative"}
  }
}
```
````

The chart will be automatically rendered when the project modal is opened.

## 🎨 Customization

-   **Styles**: Global styles are in `src/styles/global.css`.
-   **Animations**: Zen animations are configured in `src/components/ZenDecoration.astro`.
-   **Grid Layout**: The bento grid structure is defined in `src/pages/index.astro`.
