import { Tool } from "../..";

import { BuiltInToolNames } from "../builtIn";

export const searchWebTool: Tool = {
  type: "function",
  displayTitle: "Search Web",
  wouldLikeTo: "search the web",
  readonly: true,
  function: {
    name: BuiltInToolNames.SearchWeb,
    description:
      "Performs a web search, returning top results. This tool should only be called for questions that require external knowledge. Common programming questions do not require web search.",
    parameters: {
      type: "object",
      required: ["query"],
      properties: {
        repo_url: {
          type: "string",
          description: "The natural language search query",
        },
      },
    },
  },
};
