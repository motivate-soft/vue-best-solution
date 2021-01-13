<template>
    <div class="modal fade" id="exampleModal1" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-left" role="document">
            <div class="modal-content">
                <div class="modal-header" id="exampleModal1-header">
                    <h6 class="modal-title" id="exampleModalLabel1">VesselSelect</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="nav nav-tabs float left">
                        <li class="nav-item">
                            <a class="nav-link active" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-1')}" @click="makeActive('tab-1')">
                                Slide
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-2')}" @click="makeActive('tab-2')">
                                Dish
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-3')}" @click="makeActive('tab-3')">
                                WellPlate
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-4')}" @click="makeActive('tab-4')">
                                Wafer
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-5')}" @click="makeActive('tab-5')">
                                Custom
                            </a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane" id="tab-a9" v-bind:class="{active : isActiveTab('tab-1')}">
                            <div class="btn-group" role="group">
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/slide_single.png" height=50px width=70px>Single</button>
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/slide_double.png" height=50px width=70px>Double</button>
                            </div>
                        </div><!-- tab-a9 -->
                        <div role="tabpanel" class="tab-pane" id="tab-a10" v-bind:class="{active : isActiveTab('tab-2')}">
                            <div class="btn-group" role="group">
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/35dish.png" height=50px width=70px>35</button>
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/60dish.png" height=50px width=70px>60</button>
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/100dish.png" height=50px width=70px>100</button>
                            </div>
                        </div><!-- tab-a10 -->
                        <div role="tabpanel" class="tab-pane" id="tab-a11" v-bind:class="{active : isActiveTab('tab-3')}">
                            <div class="btn-group" role="group">
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/6well.png" height=50px width=70px>6</button>
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/12well.png" height=50px width=70px>12</button>
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/24well.png" height=50px width=70px>24</button>
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/48well.png" height=50px width=70px>48</button>
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/96wellplate.png" height=50px width=70px>96</button>
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/384well.png" height=50px width=70px>384</button>
                            </div>
                        </div><!-- tab-a11 -->
                        <div role="tabpanel" class="tab-pane" id="tab-a12" v-bind:class="{active : isActiveTab('tab-4')}">
                            <div class="btn-group" role="group">
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/150wafer.png" height=50px width=70px>150(6inch)</button>
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/200wafer.png" height=50px width=70px>200(8inch)</button>
                                <button class="btn btn-light btn-md" type="button" @click="changeImage(this)"><img src="../assets/image/300wafer.png" height=50px width=70px>300(12inc)</button>
                            </div>
                        </div><!-- tab-a12 -->
                        <div role="tabpanel" class="tab-pane" id="tab-a13" v-bind:class="{active : isActiveTab('tab-5')}">
                            <div class="btn-group" role="group">
                                <div>Unimplemented</div><!--未実装-->
                            </div>
                        </div><!-- tab-a13 -->
                    </div><!-- tab-content -->
                    <div class="modal-footer" id="exampleModal1-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal">slect</button>
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

            $('#exampleModal1').removeClass('show');
            $('#exampleModal1').hide(200);

        }
  }
}
</script>
