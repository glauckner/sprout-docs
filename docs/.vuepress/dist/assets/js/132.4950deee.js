(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{214:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",[t._v("Custom Sections")]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),a("p",[t._v("Custom Sections have been deprecated in Sprout SEO 4.")]),a("p",[t._v("We strongly recommend using the "),a("router-link",{attrs:{to:"./element-metadata-field.html"}},[t._v("Element Metadata Field")]),t._v(" instead. The same functionality can be achieved with the right configuration and upgrading to the latest version of Sprout SEO will be easier if you do.")],1)]),a("p",[t._v("Custom Sections allow you to add arbitrary page URLs to your XML Sitemap and manage metadata for pages that may not be otherwise supported using the URL-Enabled Sections or Element Metadata field.")]),a("p",[t._v("Consider a User Profile section where all User data is managed in the Users section, however no specific page exists for the listing page of all the User Profiles on the front-end. In this case, you may want to create a Custom Section for your User Profile listing page.")]),a("p",[t._v("Custom Sections probably only need to be used for more advanced situations. Managing metadata and XML sitemaps via the default URL-Enabled Settings will likely require less overhead to get setup and be easier for the average user to understand.")]),a("p",[t._v("Custom Sections can be enabled in Sprout SEO's Advanced settings and will require additional, manual updates to your template to add to the metadata cascade.")]),t._m(0),t._m(1),a("p",[t._v("By default, the value you use in the Custom Sections URL setting will be used for the URL. This URL is not monitored in any way dynamically, only output in your metadata when you specifically tell it to be output with the code above.")]),a("p",[t._v("As you can only define one URL in a Custom Section, if you plans to use the Custom Section as fallback metadata in more than one template, you can further customize your meta override tag to output a unique URL on each page where the override exists:")]),t._m(2)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("To indicate that you want a specific Custom Section added to the metadata processed in a template, use the Sprout SEO "),s("code",[this._v("meta")]),this._v(" tag and set the "),s("code",[this._v("section")]),this._v(" attribute to the handle of your Custom Section. All custom section handles should be prefixed with "),s("code",[this._v("sproutseo_section")]),this._v(":")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("do")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("craft")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("sproutSeo")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("meta")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("section")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("sproutseo_section:customSectionHandle"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("do")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("craft")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("sproutSeo")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("meta")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("section")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("sproutseo_section:customSectionHandle"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("canonical")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("craft")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("request")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("url")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("ogUrl")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("craft")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("request")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("url")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("twitterUrl")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("craft")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("request")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("url")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);