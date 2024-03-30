import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, k as renderSlot, j as renderComponent, u as unescapeHTML } from '../astro_SLRudV6K.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://castelll0009.github.io");
const $$BlogPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`<html> <!-- ... --> ${maybeRenderHead()}<h1>${frontmatter.title}</h1> <h2>Post author: ${frontmatter.author}</h2> <p>${frontmatter.description}</p> ${renderSlot($$result, $$slots["default"])} <!-- Markdown content is injected here --> <!-- ... --> </html>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/layouts/BlogPostLayout.astro", void 0);

const html = "<p>aqui puedes ver todos los tours</p>";

				const frontmatter = {"layout":"../../../layouts/BlogPostLayout.astro","title":"Astro in brief","author":"Himanshu","description":"Find out what makes Astro awesome!"};
				const file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/blog/tours/tour-1.md";
				const url = "/blog/tours/tour-1";
				function rawContent() {
					return "aqui puedes ver todos los tours";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
