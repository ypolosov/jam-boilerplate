<h2>Структура проекта и именования элементов</h2>

<p>Данный документ описывает стандартную структуру папок проекта и правила формирования названий классов и файлов. Наши билд-скрипты по умолчанию настроены на работу именно с такой структурой.</p>

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
<li>_script.js — объединенный js-файл.</li>
</ol>

<h4 id="tmp_">tmp/</h4>

<p>В данную папку складываются служебные картинки для верстки (например примеры аватаров или иллюстраций к новостям). В качестве альтернативы для заглушек можно использовать картинки с <a href="http://lorempixel.com">http://lorempixel.com</a> и других похожих сервисов.</p>

<h4 id="build_">Gruntfile.js</h4>

<p>Build-скрипт проекта. Для использования нужно установить <a href="https://github.com/i-akhmadullin/jet">jet</a></p>

<p>Для разработки и финальной сборки ресурсов настроены следующие базовые скрипты:</p>

<ol>
<li>jet — собирает ресурсы без сжатия. </li>
<li>jet reloader — тоже самое что и jet плюс следит за обновлением файлов, при изменении пересохраняет файлы.</li>
<li>jet publish — собирает и сохраняет ресурсы с максимальной степенью сжатия, предварительно очистив папку publish/. Также валидирует получившиеся css и js файлы через csslint и jshint.</li>
</ol>

<p>По умолчанию watch-скрипт следит за папками blocks/ и lib/ и реагирует на изменения файлов с расширениями .css, .styl, .js в них и во вложенных папках.</p>


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
