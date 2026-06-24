const fs = require('fs');
const https = require('https');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

(async () => {
  fs.mkdirSync('stitch_screens', { recursive: true });
  await download("https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzE4YjEwY2NmNTkwNzRjZWI5N2VjNWI1OTY1OGMwOTZjEgsSBxCF8a7RxAYYAZIBIwoKcHJvamVjdF9pZBIVQhMzODM3MzQyMzk4MjYwNjI3MzYw&filename=&opi=89354086", "stitch_screens/main_feed.html");
  await download("https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzRiZjkxNTBmZTFhZTRkYjJhZTY0NmE1ODA2YjI5YzA2EgsSBxCF8a7RxAYYAZIBIwoKcHJvamVjdF9pZBIVQhMzODM3MzQyMzk4MjYwNjI3MzYw&filename=&opi=89354086", "stitch_screens/editor.html");
  await download("https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2U3NjE1NGQ0NzAwMzQzNDZiNmZlZjc5NmY2ZGQwOWQ1EgsSBxCF8a7RxAYYAZIBIwoKcHJvamVjdF9pZBIVQhMzODM3MzQyMzk4MjYwNjI3MzYw&filename=&opi=89354086", "stitch_screens/login.html");
  await download("https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzY2NTc1MWUwZGYwODQ4NWY4OWMyOTk3NDQzODQ0OTJhEgsSBxCF8a7RxAYYAZIBIwoKcHJvamVjdF9pZBIVQhMzODM3MzQyMzk4MjYwNjI3MzYw&filename=&opi=89354086", "stitch_screens/post.html");
  console.log("Downloaded successfully.");
})();
