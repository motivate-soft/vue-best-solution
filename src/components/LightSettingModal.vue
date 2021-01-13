<template>
<div class="modal fade" id="exampleModal11" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-left" role="document">
        <div class="modal-content">
            <div class="modal-header" id="exampleModal11-header">
                <h6 class="modal-title" id="exampleModalLabel">Light Setting</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer" id="exampleModal11-footer">
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
  name: 'LightSettingModal',
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

            $('#exampleModal11').removeClass('show');
            $('#exampleModal11').hide(200);

        }
  }
}
</script>
