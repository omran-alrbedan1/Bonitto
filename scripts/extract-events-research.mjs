import { mkdir, readFile, writeFile } from 'node:fs/promises';

await mkdir('data/events-translations/.source', { recursive: true });
await mkdir('data/research-translations/.source', { recursive: true });

const eventsSrc = await readFile('constants/events.ts', 'utf8');
const researchSrc = await readFile('constants/researchArticles.ts', 'utf8');

const eventsBlock = eventsSrc.slice(eventsSrc.indexOf('export const events'), eventsSrc.indexOf('export function getEventBySlug'));
const researchBlock = researchSrc.slice(researchSrc.indexOf('export const researchArticles'), researchSrc.indexOf('export function getResearchArticleBySlug'));

const events = eval(`(${eventsBlock.replace(/export const events: EventItem\[\] = /, '').trim().replace(/;$/, '')})`);
const research = eval(`(${researchBlock.replace(/export const researchArticles: ResearchArticle\[\] = /, '').trim().replace(/;$/, '')})`);

await writeFile('data/events-translations/.source/events.json', `${JSON.stringify(events, null, 2)}\n`);
await writeFile('data/research-translations/.source/research.json', `${JSON.stringify(research, null, 2)}\n`);

console.log('events:', events.length, 'research:', research.length);
