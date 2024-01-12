# no-quick-fix

This repository shows an issue with the TS (language server) when a package's manifest points to source
code in the "types" entry.

## Setup

1. Enable corepack

   ```
   corepack enable
   ```

2. Install dependencies

   ```
   yarn install
   ```

3. Build all the "library" packages
   ```
   yarn workspaces foreach --all run build
   ```
   Ignore the compilation error in the faulty-app.

## Reproducing the issue

### Correct behaviour with declaration files

Go to [app.ts](packages/faulty-app/src/app.ts)and try to use the "Quick Fix" on the `Server` class
to implement the missing interface. The option should be named _Implement interface 'RpcService<typeof contract>'_.

A "Quick Fix" correctly adds the following line to the class:

```ts
doStuff: (body: DoStuffRequest) => Promise<DoStuffResponse>;
```

Delete the line.

### Faulty behaviour with source files

Now go to the [foobar-contracts manifest](packages/foobar-contracts/package.json) and change the `types` entry
to point to source files (`./src/index.ts`) instead of the declaration files (`./dist/index.d.ts`).

Now try to use the "Quick Fix" again. **There is no option to implement the interface automatically now.**

If you try to implement the interface manually, you will see some hints explaining the type of `doStuff` method.
