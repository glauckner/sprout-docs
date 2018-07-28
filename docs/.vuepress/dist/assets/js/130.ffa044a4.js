(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{182:function(t,s,a){t.exports=a.p+"assets/img/sprout-seo-metadata-variable.10b20815.png"},216:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",[t._v("Custom Metadata Variable")]),n("div",{pre:!0},[n("p",[t._v("Sprout SEO generates the metadata that is output to your pages with the "),n("code",[t._v("sproutseo")]),t._v(" tag:")])]),n("div",{staticClass:"language-twig extra-class"},[n("pre",{pre:!0,attrs:{class:"language-twig"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("sproutseo")])]),t._v(" "),n("span",{attrs:{class:"token string"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("optimize"),n("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])]),n("p",[t._v("If you prefer to have full control over the metadata and how it is output on your pages, you can stop Sprout SEO from outputting metadata for you and just let it generate the metadata and make it available to your Twig template as a variable.")]),n("p",[t._v("This will give you control to change the output format, stop certain items from being output, and even output additional metadata in new ways to meet your needs. To give yourself control over your metadata variable, you'll need to update two Advanced settings:")]),n("div",{staticClass:"table"},[n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("Setting")]),n("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Automatically render metadata")])]),n("td",{staticStyle:{"text-align":"left"}},[t._v("Disable this setting to stop Sprout SEO from outputting your metadata.")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Enable custom metadata variable")])]),n("td",{staticStyle:{"text-align":"left"}},[t._v("Enable this setting and give your custom metadata variable a name. Sprout SEO will process your metadata and make it available to your template as this variable.")])])])])]),n("p",[n("img",{attrs:{src:a(182),alt:"Custom Metadata Variable"}})]),n("div",{pre:!0},[n("p",[t._v("To manage the metadata that Sprout SEO generates as a custom variable in your templates, you can do something like the following. Reference Sprout SEO's own template in "),n("code",[t._v("sproutseo/templates/_special/metadata.html")]),t._v(" and be sure to continue to use the "),n("code",[t._v("{% sproutseo 'optimize' %}")]),t._v(" tag "),n("em",[t._v("before")]),t._v(" you access your "),n("code",[t._v("metadata")]),t._v(" variable in your templates (it's necessary to process your metadata and make the variable available):")])]),n("div",{staticClass:"language-twig extra-class"},[n("pre",{pre:!0,attrs:{class:"language-twig"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("sproutseo")])]),t._v(" "),n("span",{attrs:{class:"token string"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("optimize"),n("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%-")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("globals")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("metadata")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("globals")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("-%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%-")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("meta")]),t._v("    "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("metadata")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("meta")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("-%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%-")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("schema")]),t._v("  "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("metadata")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("schema")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("name")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("meta")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("search")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("switch")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("name")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("case")])]),t._v(" "),n("span",{attrs:{class:"token string"}},[n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n  "),n("span",{attrs:{class:"token other"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])])]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("case")])]),t._v(" "),n("span",{attrs:{class:"token string"}},[n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("author"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n  "),n("span",{attrs:{class:"token other"}},[t._v('<link href="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('" rel="author">')]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("case")])]),t._v(" "),n("span",{attrs:{class:"token string"}},[n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("publisher"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n  "),n("span",{attrs:{class:"token other"}},[t._v('<link href="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('" rel="publisher">')]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n  "),n("span",{attrs:{class:"token other"}},[t._v('<meta name="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("name")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('" content="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('">')]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endswitch")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("meta")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("googlePlus")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("is")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("defined")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("meta")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("googlePlus")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n  "),n("span",{attrs:{class:"token other"}},[t._v('<link rel="publisher" href="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("meta")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("googlePlus")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('">')]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endif")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("name")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("meta")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("robots")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("switch")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("name")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("case")])]),t._v(" "),n("span",{attrs:{class:"token string"}},[n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("canonical"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n  "),n("span",{attrs:{class:"token other"}},[t._v('<link rel="canonical" href="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('">')]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n  "),n("span",{attrs:{class:"token other"}},[t._v('<meta name="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("name")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('" content="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('">')]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endswitch")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("name")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("meta")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("geo")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n  "),n("span",{attrs:{class:"token other"}},[t._v('<meta name="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("name")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('" content="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('">')]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("name")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("meta")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("openGraph")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n  "),n("span",{attrs:{class:"token other"}},[t._v('<meta property="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("name")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('" content="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('">')]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("name")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("meta")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("twitterCard")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n  "),n("span",{attrs:{class:"token other"}},[t._v('<meta name="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("name")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('" content="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("value")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('">')]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("property")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("globals")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("ownership")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n  "),n("span",{attrs:{class:"token other"}},[t._v('<meta name="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("property")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("metaTag")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('" property="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("property")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("metaTag")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('" content="')]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("property")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("verificationCode")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),n("span",{attrs:{class:"token other"}},[t._v('">')]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%-")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("item")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("schema")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("-%}")])])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("item")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),n("span",{attrs:{class:"token property"}},[t._v("item")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token property"}},[t._v("getSchema")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endif")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token ld"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("{%-")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),n("span",{attrs:{class:"token rd"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])])}],o=a(0),e=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=e.exports}}]);