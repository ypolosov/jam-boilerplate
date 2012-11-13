<h2>Структура проекта и именования элементов</h2>

<p>Данный документ описывает стандартную структуру папок проекта и правила формирования названий классов и файлов. Наши билд-скрипты по умолчанию настроены на работу именно с такой структурой.</p>

<p>Чтобы не начинать каждый проект с нуля можно взять готовую к использованию заготовку отсюда: <a href="https://github.com/jetstyle/jam-boilerplate">jam-boilerplate</a>.</p>

<h3>Базовая структура проекта</h3>

<pre><code>blocks/
    _b-block-default/
        b-block-default.css
        b-block-default.ie.css
        b-block-default.js
        b-block-default__icons.png
    b-block-custom/
        b-block-custom.css
        b-block-custom.ie.css
        b-block-custom.js
        b-block-custom__icons.png
    config.styl
    style.css
    style.ie.css
lib/
publish/
tmp/
.htaccess
apple-touch-icon-114x114.png
apple-touch-icon-144x144.png
apple-touch-icon-57x57.png
apple-touch-icon-72x72.png
apple-touch-icon.png
crossdomain.xml
favicon.ico
Gruntfile.js
index.html
robots.txt
</code></pre>

<h3>Описание файлов и папок</h3>

<h4 id="blocks_">blocks/</h4>

<p>В данной папке хранятся ресурсы используемые при верстке (css, js, изображения). Ресурсы сгруппированы по блокам, правила разделения по блоками и их именования описаны ниже.</p>

<p>Кроме собственно блоков в данной папке также присутствуют следующие файлы:</p>

<ol>
<li>style.css — общий файл стилей проекта. В него через @import подключаются все остальные .css и .styl файлы. Он используется как основа для создания единого файла стиля при сборке ресурсов.</li>
<li>style.ie.css — файл в котором хранятся фиксы для IE версий 8 и ниже. В начало файла импортится style.css, поэтому для ie нужно подключать только его. Также используется как основа для сборки ресурсов.</li>
<li>config.styl — stylus-конфиг для стандартных блоков из базовой поставки (reset, text, grid). Позволяет менять типы и размеры шрифтов, свойства типографики и настройки сетки.</li>
</ol>

<h4 id="lib_">lib/</h4>

<p>Папка для внешних библиотек. jQuery, Backbone.js и прочие зависимости нужно размещать здесь. если порядок их подключения в html-файл не важен можно на этом остановиться, если их нужно подключать в определенном порядке, то необходимо отредактировать файл build/grunt.js чтобы этот порядок отразить.</p>

<h4 id="publish_">publish/</h4>

<p>Папка куда сохраняются пожатые .js и .css файлы.</p>

<p>По-умолчанию создаются следующие файлы:</p>

<ol>
<li>_style.css — объединенный css-файл без сжатия.</li>
<li>_style.ie.css — объединенный css-файл для IE без сжатия.</li>
<li>_style.min.css — сжатый css-файл.</li>
<li>_style.ie.min.css — сжатый css-файл для IE.</li>
<li>_script.js — объединенный js-файл.</li>
<li>_script.min.js — сжатый объединенный js-файл.</li>
</ol>

<h4 id="tmp_">tmp/</h4>

<p>В данную папку складываются служебные картинки для верстки (например примеры аватаров или иллюстраций к новостям). В качестве альтернативы для заглушек можно использовать картинки с <a href="http://lorempixel.com">http://lorempixel.com</a> и других похожих сервисов.</p>

<h4 id="build_">Gruntfile.js</h4>

<p>Build-скрипт проекта. Для использования нужно установить [https://github.com/i-akhmadullin/jet]()</p>

<p>Для разработки и финальной сборки ресурсов настроены следующие базовые скрипты:</p>

<ol>
<li>grunt reloader — собирает ресурсы без сжатия, следит за обновлением файлов, при изменении пересохраняет файлы. Для обновления стилей без перезагрузки необходимо поставить расширение LiveReload.</li>
<li>grunt publish — собирает и сохраняет ресурсы с максимальной степенью сжатия, предварительно очистив папку publish/. Также валидирует получившиеся css и js файлы через csslint и jshint.</li>
</ol>

<p>По умолчанию watch-скрипт следит за папками blocks/ и lib/ и реагирует на изменения файлов с расширениями .css, .styl, .js в них и во вложенных папках.</p>



<h4 id="_">Прочие ресурсы в корне</h4>

<ul>
<li>.htaccess — конфиг для сервера Apache с установленными настройками для GZip-сжатия, кеша и правильного выставления заголовков.</li>
<li>apple-touch-icon-*.png — иконки для рабочего стола iOS-устройств в разных размерах.</li>
<li>crossdomain.xml — конфиг для flash&#8217;а, запрешающий crossdomain scripting в целях безопасности.</li>
<li>favicon.ico — фавикон.</li>
<li>robots.txt — заготовка robots.txt.</li>
</ul>

<p>Также в корень проекта складываются созданные html-файлы.</p>

<h3 id="_">Структура блоков</h3>

<p>Блоки в папке blocks/ бывают двух видов: с символом "_" в начале названия и без. Файлы с землей в начале являются системными, их не рекомендуется редактировать напрямую. Изменения их настроек обычно делается через внешний config.styl файл, либо в корне папки blocks/, либо в корне папки текущего блока.</p>

<p>Если возможностей конфига недостаточно, рекомендуется создать одноименную папку без земли в начале и переназначить там необходимые свойства. </p>

<p>Подобный подход позволит нам обновлять системные файлы не боясь что-нибудь поломать.</p>

<p>Все файлы ресурсов, относящиеся к блоку, хранятся внутри папки блока. Названия всех файлов ресурсов, относящихся к блоку, начинаются с названия блока. Если в папке только один файл подобного типа, то можно именем блока ограничится. Если файлов одного типа несколько, то к названию дополняется название элемента или модификатора к которым они относятся.</p>

<p>Ресурсы относящиеся к отдельным ресурсам и модификаторам можно выносить в подпапки с именем этого ресурса или модификатора. Например: "<strong>__title</strong>" или "<strong>_type_small</strong>".</p>

<h3 id="_">Наименования классов</h3>

<p>Все оформление в css вешается на классы. id и названия тегов для выбора элементов не используются. Каскады используются только внутри класса-модификатра.</p>

<p>Мы используем принцип формирования названий из БЭМ-методологии:</p>

<ol>
<li><strong>b-block</strong> — название блока, должен находиться на корневом теге блока, элементы блока не могут находиться вне тега блока.</li>
<li><strong>b-block__element</strong> — название элемента, всегда включает название блока.</li>
<li><strong>b-block_type_value</strong> — модификатор блока или элемента. Используется вторым классом на модифицируемым элементе. Может изменять свойства вложенных элементов через каскад.</li>
</ol>

<p>Префикс "<strong>.b-</strong>" мы используем для создания собственно неймспейса, который с низкой вероятностью будет пересекаться с именами классов используемыми в подключаемых js-библиотеках. Вместо "<strong>.b-</strong>" при желании можно использовать любой другой уникальный префикс, данный используется в основном по историческим причинам.</p>


<p><strong>Подробнее о синтаксисе БЭМ:</strong></p>

<ol>
    <li><a href="http://bem.github.com/bem-method/pages/beginning/beginning.ru.html">Что такое БЭМ?</a></li>
</ol>
