$(function() {

    describe('RSS Feeds', function() {

        it('O array de feeds está definido', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('A URL está definida', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        it('O nome está definido', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    describe('The Menu', function() {

        var body = $('body');

        it('O menu está escondido por default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });


        it('A visibilidade do menu mudou ao clicar no ícone de menu', function() {
            var menuIcon = $('.menu-icon-link');

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        //loadFeed() é uma função assíncrona, por isso é necessário usar a callback done do Jasmine
        //beforeEach() é uma função do Jasmine que executa antes de executar qualquer spec (it) que está dentro do describe.
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('Existe pelo menos uma entrada de feed no container de feed', function() {
            expect($('.feed .entry').length).not.toBeLessThan(1);
        });
    });

    describe('New Feed Selection', function() {

        var primeiroConteudo,
            segundoConteudo;

        beforeEach(function(done) {
            loadFeed(0, function() {
                primeiroConteudo = $('.feed').html();
                loadFeed(1, done);
            });
        });

        it('O conteúdo do container feed é diferente quando a url do feed muda', function() {
            segundoConteudo = $('.feed').html();
            expect(primeiroConteudo).not.toEqual(segundoConteudo);
        });
    });
}());
