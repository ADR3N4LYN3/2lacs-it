import { describe, expect, it } from 'vitest';

import { buildCanonical, buildSeo } from '../lib/seo';

describe('buildCanonical', () => {
  it('renvoie la racine sans slash final', () => {
    expect(buildCanonical('/')).toBe('https://2lacs-it.com');
  });

  it('normalise un chemin avec slashs superflus', () => {
    expect(buildCanonical('//contact//')).toBe('https://2lacs-it.com/contact');
  });

  it('préfixe un chemin sans slash de tête', () => {
    expect(buildCanonical('a-propos')).toBe('https://2lacs-it.com/a-propos');
  });
});

describe('buildSeo', () => {
  it('suffixe le titre de page avec la marque', () => {
    expect(buildSeo({ title: 'Contact', path: '/contact' }).title).toBe('Contact — 2LACS IT');
  });

  it('retombe sur le titre et la description du site sans entrée', () => {
    const meta = buildSeo();
    expect(meta.title).toContain('2 LACS Informatique');
    expect(meta.canonical).toBe('https://2lacs-it.com');
    expect(meta.description.length).toBeGreaterThan(0);
  });
});
