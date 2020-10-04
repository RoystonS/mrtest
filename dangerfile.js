import { message, danger } from 'danger';

const modifiedMarkdown = danger.git.modified_files.join("- ");
message("Changed files in this PR: \n - " + modifiedMarkdown);

console.log("Dangerfile DEBUG:", process.env.DEBUG);
