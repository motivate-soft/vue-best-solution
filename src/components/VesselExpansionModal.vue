<template>
    <div class="modal fade" id="exampleModal13" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-left" role="document">
            <div class="modal-content">
            <div class="modal-header" id="exampleModal13-header">
                <h6 class="modal-title" id="exampleModalLabel">Vessel Expansion</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <img id="vessel-image" src="../assets/image/96wellplate.png" width="440px" height="320px" border="1px" alt="96wellplate" style="user-select: auto;">
            </div>
            <div class="modal-footer" id="exampleModal13-footer">
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

            $('#exampleModal13').removeClass('show');
            $('#exampleModal13').hide(200);

        }
  }
}
</script>
