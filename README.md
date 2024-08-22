# Keepy (Notes CLI)
Originally, this was a `node` training repo taken from one of [`Hendrixer`](https://github.com/Hendrixer)'s courses. However, I liked it so much that I decided to give it a name and invest more time into integrating new functionalities into it.

## Getting Started
Before anything you will need to clone this repository.
```
$ git clone https://github.com/RodSoriano/keepy.git
```

From here you will need to install `node` dependencies.
```
$ npm install
```

Once completed, we will set up a basic yet well-grounded usage of files as our database. Although this approach is unconventional, the underlying principles remain the same.

The files needs to be called `db.json` and to be located at the root level of the app.
```
# ./db.json

{
  "notes": []
}
```

Finally, we need to make this small CLI program executable by the OS. The simplest way to achieve this is through a symbolic link.
```
$ npm link
```

This command is used to create a symbolic link either a globally installed package or a local package. In this case it enables us to use this application globally without needing to install it within the global `node_modules`.

From here you can simply list all available commands.
```
$ note --help
```

## Usage
The `note` CLI has different commands that can be used.

- new
- all
- find
- remove
- clean
- web (still under development)

Each note can also contain tags that can be utilized in the future or used to organize the different notes we have.

The tags option is a flag that accepts a string with the tags, each one separated by a comma.

When creating a new note it can look something like this.
```
$ note new "Walk my dog" --tags "health, pet"
```

This will output the following result.
```
New note {
  id: 1724305244008,
  content: 'Walk my dog',
  tags: [ 'health', ' pet' ]
}
```

You can also search notes by small keywords.

```
$ note find "dog"
```

This will output all notes with the word `dog` in it, like the one we created before.

## What it Covers
This small CLI application covers the following topics.

- Testing.
- Templating.
- File operations.
- Web server creation.
