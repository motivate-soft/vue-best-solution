<template>
    <div class="modal fade" id="exampleModal0" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-left" role="document">
            <div class="modal-content">
                <div class="modal-header" id="exampleModal0-header">
                    <h6 class="modal-title" id="exampleModalLabel0">Save As</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="tab-content">
                        <div id="save-file-box">
                            <input type="text" id="file-name">
                            <select id="file-ext">
                                <option value="0">.png</option>
                                <option value="1">.jpg</option>
                                <option value="2">.tiff</option>
                                <option value="3">.bmp</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer" id="exampleModal0-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Close</button>
                        <button type="button" class="btn btn-primary" @click="saveAs">Save</button>
                    </div>
                </div><!-- modal-body -->
            </div><!-- modal-content -->
        </div>
    </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'VesselSelectModal',
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
            $('#exampleModal0').removeClass('show');
            $('#exampleModal0').hide(200);
        },
        saveAs: function() {
            console.log("saveas");
        }
  }
}
</script>
