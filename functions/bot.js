const functions = require("firebase-functions");
const admin = require("./admin");

const handleBots = functions.https.onRequest(async (request, response) => {
  try {
    const ua = request.header("user-agent");

    if (request.path !== "/" || !ua.includes("bot")) {
      response.end();
    }

    const books = await admin
      .database()
      .ref(`/books`)
      .once("value", snap => snap.val());

    const html = `
	<!DOCTYPE html>
	<html lang="fr">
		<head>
			<meta charset="utf-8" />
			<meta name="description" content="Florence Jouniaux, auteure des livres La stèle sacrée, L'héritière du don, Argenix et autres ouvrages fantasy, science-fiction, historique etc" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#000000" />
		
			<title>Florence Jouniaux, auteure</title>
		</head>
		<body>
			<main>
				<h1>Florence Jouniaux</h1>
				<p>Écrivain depuis plus de 10 ans, j'ai rédigé plusieurs oeuvres que voici :</p>
				<section id="books">
					<h2>Mes livres</h2>
					<ul>
						${Object.values(books.toJSON()).map(book => (
							`<li>
								<h3>${book.title}</h3>
								<p>${book.description}</p>
							</li>`))}
					</ul>
				</section>
			</main>
		</body>
	</html>
	`;
    response.send(html);
  } catch (err) {
    console.log(err);
    throw new functions.https.HttpsError(
      "unknown",
      "Something bad happened",
      err
    );
  }
});

module.exports = handleBots;
