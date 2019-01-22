<div class="container-fluid">
  <h1 class="text-center">Authorized Retailers</h1>
  <h1></h1>
  <div class="row">
    {% for block in section.blocks %}
      {%- capture col_size -%}
        {{ 12 | divided_by: forloop.length }}
      {%- endcapture -%}
      <div class="col-sm-{{ col_size }}">
        <div class="card border-0">
          <img class="card-img-top" src="{{ block.settings.retailer-image | img_url: "master" }}" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-text">{{ block.settings.retailer-title }}</h4>
            <p class="card-text">{{ block.settings.retailer-description }}</p>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

{% schema %}

{
  "name": "Authorized Retailers",
  "class": "authorized-retailers-section",
  "max_blocks": 4,
  "blocks": [
    {
      "type": "something",
      "name": "Retailer",
      "settings": [
        {
          "type": "image_picker",
          "id": "retailer-image",
          "label": "Retailer Image"
        },
        {
          "type": "text",
          "id": "retailer-title",
          "label": "Retailer Name"
        },
        {
          "type": "text",
          "id": "retailer-description",
          "label": "Retailer Description"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Authorized Retailers",
      "category": "Retailer List"
    }
  ]
}
{% endschema %}

{% stylesheet %}

{% endstylesheet %}

{% javascript %}

{% endjavascript %}
