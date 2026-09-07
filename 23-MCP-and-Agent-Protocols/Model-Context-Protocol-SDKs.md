# Model Context Protocol SDKs

> Model Context Protocol (MCP) SDKs provide the foundational client and server libraries to build standardized interfaces between foundation models and external tools over JSON-RPC.

## 🎯 What to Learn

- The MCP architecture: Clients, Servers, and Host applications
- Transport layers: Stdio (standard input/output) vs. SSE (Server-Sent Events) over HTTP
- The core MCP primitives: Resources, Prompts, and Tools
- Official Python and TypeScript SDK architectures
- Security boundaries, connection handshakes, and capabilities negotiation

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Model Context Protocol (MCP) Specification & Official Docs](https://modelcontextprotocol.io/)
  - Type: Official Standard & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: Open-sourced by Anthropic, MCP is rapidly becoming the USB-C of AI integrations, providing an open standard for connecting LLMs to data sources and tools.

### 📖 Documentation & References

- [MCP Official Documentation](https://modelcontextprotocol.io/introduction) — Complete guide to MCP concepts, quickstarts, architecture, and security.
- [MCP Python SDK Documentation](https://github.com/modelcontextprotocol/python-sdk) — Official Python library for building MCP servers and clients using FastMCP.
- [MCP TypeScript SDK Documentation](https://github.com/modelcontextprotocol/typescript-sdk) — Official TypeScript SDK for Node.js and browser environments.

### 🎓 Courses

- [Building MCP Servers (DeepLearning.AI)](https://www.deeplearning.ai/) — Practical short course on building custom MCP tools and servers.

### ▶️ YouTube — English

- [Matthew Berman: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman
  - Language: English
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: Clear overview of how MCP replaces ad-hoc API integrations with a unified protocol.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [RESTful Web APIs](https://www.oreilly.com/) — Foundational concepts in hypermedia, protocol design, and standardized client-server interaction.

### 💻 GitHub / Implementations

- [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) — The official Python SDK for Model Context Protocol servers and clients.
- [modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) — The official TypeScript SDK for Model Context Protocol.
- [modelcontextprotocol/specification](https://github.com/modelcontextprotocol/specification) — The official specification for the Model Context Protocol.

## 📄 Foundational Papers

- [Model Context Protocol Specification v1.0](https://spec.modelcontextprotocol.io/) — Formal technical specification for JSON-RPC 2.0 messages, resources, and tool definitions.

### 🧪 Practice

- [MCP Server Quickstart](https://modelcontextprotocol.io/quickstart/server) — Build and run your first weather or SQLite MCP server in under 15 minutes.

### 🛠️ Projects

- [Enterprise Database MCP Server](https://modelcontextprotocol.io/quickstart/server) — Build a custom MCP server exposing read-only queries and schema resources to Claude Desktop and Cursor.

## 🧭 Recommended Learning Path

1. Learn the problem MCP solves: eliminating M*N point-to-point tool integrations.
2. Study the 3 core primitives: Resources (static data), Prompts (templates), and Tools (executable actions).
3. Build a simple FastMCP Python server that exposes mathematical or filesystem tools.
4. Configure Claude Desktop or Cursor to connect to your local MCP server over stdio.
5. Implement an SSE-based remote MCP server with token authentication.

## ⭐ Top 3 Resources

1. Model Context Protocol Docs (modelcontextprotocol.io)
2. MCP Python SDK (modelcontextprotocol/python-sdk)
3. MCP Specification (spec.modelcontextprotocol.io)

