---
title: OML
badge: Object Markup Language
tags: Rust, Code generation, CLI
repo: https://github.com/Nikolay-Ts/OML
---

Define a class or complex data structure *once* in a `.oml` file, then generate
the equivalent code in **C++, Java, Kotlin, Python, Rust, SQL and TypeScript**. It
also works backwards, converting existing source files into `.oml` definitions.
Handles imports across files, cyclic-import detection and recursive directory
parsing.

```
import "engine.oml";

class Car {
    public string name;
    public Engine engine;
}
```

Built in Rust with a `clap` command-line interface, so it can be pointed at a
single file or a whole directory tree.
