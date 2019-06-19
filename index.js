/* eslint-env browser */

const isDev = ['localhost', '127.0.0.1'].includes(location.hostname);

// Helper
const dom = {
	select: document.querySelector.bind(document),
	slectAll: document.querySelectorAll.bind(document)
};

const injectScript = (source, callback) => {
	const script = document.createElement('script');
	script.src = source;
	script.addEventListener('load', callback);
	document.head.appendChild(script);
};

const insertHypenationHintsForCamelCase = string => string.replace(/([a-z])([A-Z])/g, '$1\u00AD$2');

// Latest blog post
(async () => {
	const username = 'rbalexander';
	const graphql = `
		query PostQuery($username: String!) {
			posts(username: $username, limit: 1) {
				title
				url
				subtitle
			}
		}
	`;

	const url = new URL('https://micro-medium-api-gqmwonovpk.now.sh/graphql');
	url.searchParams.append('variables', JSON.stringify({username}));
	url.searchParams.append('query', graphql);

	const json = await (await fetch(url)).json();
	const item = json.data.posts[0];

	const title = dom.select('#latest-blog-post a');
	title.href = item.url;
	title.textContent = item.title;

	dom.select('#latest-blog-post p').textContent = item.subtitle;
	dom.select('#latest-blog-post').classList.add('visible');
})();

{
	function hideScrollHint() {
		if (window.scrollY > 100) {
			document.removeEventListener('scroll', hideScrollHint);
			dom.select('#scroll-hint').classList.add('hidden');
		}
	}

	document.addEventListener('scroll', hideScrollHint, {passive: true});
}
