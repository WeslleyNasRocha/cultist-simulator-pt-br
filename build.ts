import { readdir } from 'fs/promises';

try {
  const files = await readdir('translations');
  for await (const file of files)
    console.log(file);
} catch (err) {
  console.error(err);
}