<template>
	<div class="modal fade" id="exampleModal5" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-left" role="document">
            <div class="modal-content">
                <div class="modal-header" id="exampleModal5-header">
                    <h6 class="modal-title" id="exampleModalLabel">3DFilter Select</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="accordion" id="accordion3D" role="tablist" aria-multiselectable="true">
                            <div class="card">
                                <div class="card-header" role="tab" id="headingOne3D">
                                    <h5 class="mb-0">
                                        <a class="text-body d-block p-1 m-n3" data-toggle="collapse" href="#collapseOne3D" role="button" aria-expanded="true" aria-controls="collapseOne" @click="makeActive('tab-1')">
                                            <p class="font-med">Convolution</p><!--コンボリューション-->
                                        </a>
                                    </h5>
                                </div><!-- /.card-header -->
                                <div id="collapseOne3D" class="collapse" v-bind:class="{show: isActiveTab('tab-1')}" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion3D">
                                    <div class="card-body">
                                        <div class="btn-group-vertical" role="group" aria-label="button-group-3Dfilter-combo">
                                            <button type="button" class="btn btn-sm bg-light text-dark">Low pass</button><!--ローパス-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">High pass</button><!--ハイパス-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Gauss</button><!--ガウス-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Edge+</button><!--エッジ＋-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Edge-</button><!--エッジ－-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Median</button><!--メディアン-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Rank</button><!--ランク-->
                                        </div>
                                    </div><!-- /.card-body -->
                                </div><!-- /.collapse -->
                            </div><!-- /.card -->

                            <div class="card">
                                <div class="card-header" role="tab" id="headingTwo3D">
                                    <h5 class="mb-0">
                                        <a class="collapsed text-body d-block p-1 m-n3" data-toggle="collapse" href="#collapseTwo3D" role="button" aria-expanded="false" aria-controls="collapseTwo" @click="makeActive('tab-2')">
                                            <p class="font-med">Morphological</p>
                                        </a>
                                    </h5>
                                </div><!-- /.card-header -->
                                <div id="collapseTwo3D" class="collapse" v-bind:class="{show: isActiveTab('tab-2')}" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion3D">
                                    <div class="card-body">
                                        <div class="btn-group-vertical" role="group" aria-label="button-group-3Dfilter-mofo">
                                            <button type="button" class="btn btn-sm bg-light text-dark">Cutting</button><!--切断-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Connection</button><!--接続-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Contraction</button><!--収縮-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Distance map</button><!--ディスタンスマップ-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Watershed</button><!--Watershed-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Gray Watershed</button><!--グレイWatershed-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Thinning</button><!--細断化-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Cutting</button><!--切断-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Pruning</button><!--プルーニング-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">End point</button><!--枝端点-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Degeneration</button><!--縮退-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Top hat+</button><!--トップハット＋-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Top hat-</button><!--トップハット－-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Ring top hat</button><!--リングトップハット-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Slope</button><!--勾配-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">great</button><!--極大-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Reduction</button><!--極小-->
                                        </div>
                                    </div><!-- /.card-body -->
                                </div><!-- /.collapse -->
                            </div><!-- /.card -->

                            <div class="card">
                            <div class="card-header" role="tab" id="headingThree3D">
                                <h5 class="mb-0">
                                    <a class="collapsed text-body d-block p-1 m-n3" data-toggle="collapse" href="#collapseThree3D" role="button" aria-expanded="false" aria-controls="collapseThree" @click="makeActive('tab-3')">
                                        <p class="font-med">カーネル</p><!--カーネル-->
                                    </a>
                                </h5>
                            </div><!-- /.card-header -->
                                <div id="collapseThree3D" class="collapse" v-bind:class="{show: isActiveTab('tab-3')}" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion3D">
                                    <div class="card-body">
                                        <div class="btn-group-vertical" role="group" aria-label="button-group-3Dfilter-kernel">
                                            <button type="button" class="btn btn-sm bg-light text-dark">Convolution</button><!--コンボリューション-->
                                            <button type="button" class="btn btn-sm bg-light text-dark">Morphological</button><!--モフォロジカル-->
                                        </div>
                                    </div><!-- /.card-body -->
                                </div><!-- /.collapse -->
                            </div><!-- /.card -->
                    </div><!-- /#accordion -->

                </div>
                <div class="modal-footer" id="exampleModal5-footer">
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
  name: 'Filter3DModal',
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

            $('#exampleModal5').removeClass('show');
            $('#exampleModal5').hide(200);

        }
  }
}
</script>
