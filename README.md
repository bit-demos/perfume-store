# Shoe Stores Demo built with Bit components in React

Shoe Store is made up of components from the base ui scope and the ecommerce scope.

<img width="1124" alt="CleanShot 2021-08-10 at 23 26 40@2x" src="https://user-images.githubusercontent.com/13063165/128937364-5c814d60-7538-4e00-8571-31ad3020bae6.png">

Explore components for the [perfume-store](https://bit.dev/learn-bit-react/perfume-store)

<img width="1790" alt="CleanShot 2021-08-13 at 00 17 22@2x" src="https://user-images.githubusercontent.com/13063165/129277097-1f8d431c-b697-4d6b-ad16-bcb05dd59e2e.png">


If you would like to import(clone) the project to take it for a test run make sure you have [bit installed](https://harmony-docs.bit.dev/getting-started/installing-bit).

```bash
npm i -g @teambit/bvm
bvm install
```

Create an empty workspace. (skip this step if you want to import the components into an already created workspace)

```bash
bit new react perfume-store --empty
```

Use the `bit import` command to import all components into your workspace. This is similar to cloning a project.

```bash
bit import "learn-bit-react.perfume-store/*"
```

Copy the `workspace.jsonc` file from this repository and replace the one in your workspace. This will ensure you have the correct dependencies and environments set.

Start the dev server

```bash
bit start
```

You should now see all the ecommerce components on [localhost:3000](http://localhost:3000)

To run the app use:

```bash
bit run perfume-store
```
