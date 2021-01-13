<template>
    <div class="modal fade" id="exampleModal14" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-left" role="document">
            <div class="modal-content">
                <div class="modal-header" id="exampleModal14-header">
                    <h6 class="modal-title" id="exampleModalLabel">Subtraction</h6><!--減算-->
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                            <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                </div>
                <div class="modal-footer" id="exampleModal14-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Close</button>
                    <button type="button" class="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'SubstractionModal',
  props: {
    msg: String
  },
  data() {

	return {
		choice: 'tab-1',
	}

  },
  methods: {
		makeActive: function(val) {
            this.choice = val;
            console.log(this.choice);
        },
		isActiveTab: function(val) {
			return this.choice === val;
        },
        closeModal: function() {

            $('#exampleModal14').removeClass('show');
            $('#exampleModal14').hide(200);

        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	@import "../assets/css/style.css";
	@import "../assets/css/Control.FullScreen.css";
	@import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
	@import "../assets/open-iconic/font/css/open-iconic-bootstrap.min.css";
	@import "https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css";
	@import "https://use.fontawesome.com/releases/v5.6.1/css/all.css";
	@import "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css";
</style>