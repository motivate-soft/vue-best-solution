<template>
    <div class="modal fade" id="exampleModal" ref="methodselectmodal" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div class="modal-dialog modal-lg modal-dialog-left" role="document">
            <div class="modal-content">
                <div class="modal-header" id="exampleModal-header">
                    <h6 class="modal-title" id="exampleModalLabel">Method Select</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="nav nav-tabs float left">
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-1')}" @click="makeActive('tab-1')">
                                Tissie
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-2')}" @click="makeActive('tab-2')">
                                Cell
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-3')}" @click="makeActive('tab-3')">
                                Material
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-4')}" @click="makeActive('tab-4')">
                                Semicon
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane" id="tab-13" v-bind:class="{active : isActiveTab('tab-1')}">
                            <div class="btn-group" role="group">
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/image/noun_cell_2440046.png" height=50px width=50px /></button>
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_cell_2528767.png" height=50px width=50px /></button>
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/image/noun_Cells_1515592.png" height=50px width=50px /></button>
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/image/noun_Cells_2104131.png" height=50px width=50px /></button>
                            </div>
                        </div><!-- /tab-13 -->

                        <div role="tabpanel" class="tab-pane" id="tab-14" v-bind:class="{active : isActiveTab('tab-2')}">
                            <div class="btn-group" role="group">
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_animal_cell_839134.png" height=50px width=50px /></button>
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_Bacteria_708524.png" height=50px width=50px /></button>
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_cell_1332851.png" height=50px width=50px /></button>
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_cell_165944.png" height=50px width=50px /></button>
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_cell_2200249.png" height=50px width=50px /></button>
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_cell_1906428.png" height=50px width=50px /></button>
                            </div>
                            <div class="btn-group" role="group">
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_cell_20493.png" height=50px width=50px /></button>
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_cell_711633.png" height=50px width=50px /></button>
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_cell_711631.png" height=50px width=50px /></button>
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_cell_711645.png" height=50px width=50px /></button>
                            </div>
                        </div><!-- /tab-14 -->

                        <div role="tabpanel" class="tab-pane" id="tab-15" v-bind:class="{active : isActiveTab('tab-3')}">
                            <div class="btn-group" role="group">
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_Cells_2574546.png" height=50px width=50px /></button>
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/noun_cell_2379795.png" height=50px width=50px /></button>
                            </div>
                        </div><!-- /tab-15-->

                        <div role="tabpanel" class="tab-pane" id="tab-16" v-bind:class="{active : isActiveTab('tab-4')}">
                            <div class="btn-group" role="group">
                                <button class="btn btn-light btn-md" type="button"><img src="../assets/../assets/image/wafer.png" height=50px width=50px /></button>
                            </div>
                        </div><!-- /tab-16 -->
                    </div><!-- /tab-content -->
                </div><!-- /modal-body -->
                <div class="modal-footer" id="exampleModal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                    <button type="button" class="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'MethodSelectModal',
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

            $('#exampleModal').removeClass('show');
            $('#exampleModal').hide(200);

        }
  }
}
</script>
