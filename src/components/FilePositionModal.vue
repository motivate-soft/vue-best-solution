<template>
    <div class="modal fade" id="exampleModal3" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-left" role="document">
            <div class="modal-content">
                <div class="modal-header" id="exampleModal3-header">
                    <h6 class="modal-title" id="exampleModalLabel">Position Select</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="nav nav-tabs float left">
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-1')}" @click="makeActive('tab-1')">
                                Images
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-2')}" @click="makeActive('tab-2')">
                                Tiling
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-3')}" @click="makeActive('tab-3')">
                                Metadate
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-4')}" @click="makeActive('tab-4')">
                                NamesAndTypes
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="tab" data-toggle="tab" href="#" v-bind:class="{active : isActiveTab('tab-5')}" @click="makeActive('tab-5')">
                                Groups
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane" id="tab-17" v-bind:class="{active : isActiveTab('tab-1')}">
                            <div class="card">
                                <div class="card body">
                                    <div id="target" style="border: solid 5px #ccc; padding:2em; text-align:center;">
                                        Drag And Drop
                                    </div>
                                    <image id='preview' height='50px' width='50px'></image>
                                </div>
                            </div><!-- /card -->
                        </div><!-- #tab-17 -->
                        <div role="tabpanel" class="tab-pane" id="tab-18" v-bind:class="{active : isActiveTab('tab-2')}">
                            <div class="row">
                                <div class="col-2">
                                    <nav class="nav flex-column">
                                        <a class="nav-link active" href="#tab-ta" role="tab" data-toggle="tab" >edit</a>
                                        <a class="nav-link" href="#tab-tb" role="tab" data-toggle="tab" >alignment</a>
                                        <a class="nav-link" href="#tab-tc" role="tab" data-toggle="tab" >bonding</a>
                                        <a class="nav-link" href="#tab-td" role="tab" data-toggle="tab" >shading</a>
                                        <a class="nav-link" href="#tab-te" role="tab" data-toggle="tab" >display</a>
                                        <a class="nav-link" href="#tab-tf" role="tab" data-toggle="tab" >result</a>
                                        <a class="nav-link" href="#tab-tg" role="tab" data-toggle="tab" >option</a>
                                    </nav>
                                </div>
                                <div class="col-3">
                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="tab-ta">
                                            <div class="card">
                                                <div class="card body">
                                                    Edit
                                                </div><!--編集-->
                                            </div><!-- card -->
                                        </div>
                                        <div role="tabpanel" class="tab-pane" id="tab-tb">
                                            Pasting
                                        </div><!--貼り合わせ-->
                                        <div role="tabpanel" class="tab-pane" id="tab-tc">
                                            Union
                                        </div><!--結合-->
                                        <div role="tabpanel" class="tab-pane" id="tab-td">
                                            shading
                                        </div><!--シェーディング-->
                                        <div role="tabpanel" class="tab-pane" id="tab-te">
                                            display
                                        </div><!--表示-->
                                        <div role="tabpanel" class="tab-pane" id="tab-tf">
                                            result
                                        </div><!--結果-->
                                        <div role="tabpanel" class="tab-pane" id="tab-tg">
                                            option
                                        </div><!--オプション-->
                                    </div><!-- /tab-content -->
                                </div><!-- /col-3 -->

                                <div class="col-7">
                                Image preview
                                </div><!--画像プレビュー-->
                            </div><!-- /row -->
                        </div><!-- #tab-18 -->

                        <div role="tabpanel" class="tab-pane" id="tab-19" v-bind:class="{active : isActiveTab('tab-3')}">
                                    Of meta information<br><!--メタ情報の-->
                            Column information<br><!--カラム情報-->
                            Row information<br><!--ロウ情報-->
                            Image tile information<br><!--画像のタイル情報-->
                            Image pseudo color channel information<br><!--画像の疑似カラーチャンネル情報-->
                            Image channel wavelength / reagent information<br><!--画像のチャネル波長・試薬情報-->
                            Z stack information for image<br><!--画像のZスタック情報-->
                                                                            Image timeline information<br><!--画像のタイムライン情報-->
                            Image objective lens information<br><!--画像の対物レンズ情報-->
                            Image scale information<br><!--画像のスケール情報-->
                        </div><!-- /#tab-19 -->

                        <div role="tabpanel" class="tab-pane " id="tab-20" v-bind:class="{active : isActiveTab('tab-4')}">
                                    Representative image file name<br><!--代表する画像ファイル名-->
                            Name corresponding to a group of containers<br><!--容器のグループに相当する名前-->
                            The name corresponding to the column<br><!--カラムに相当する名前-->
                            The name corresponding to the row<br><!--ロウに相当する名前-->
                            The name corresponding to the tile in the image<br><!--画像のタイルに相当する名前-->
                            The name corresponding to the pseudo color channel of the image<br><!--画像の疑似カラーチャンネルに相当する名前-->
                            The name corresponding to the Z stack of the image<br><!--画像のZスタックに相当する名前-->
                            The name corresponding to the timeline of the image<br><!--画像のタイムラインに相当する名前-->
                        </div><!-- /#tab-20 -->

                        <div role="tabpanel" class="tab-pane" id="tab-21" v-bind:class="{active : isActiveTab('tab-5')}">
                                Group
                        </div><!-- /#tab-21 -->
                    </div><!-- /tab-content -->
                </div><!-- /modal-body -->
                <div class="modal-footer" id="exampleModal3-footer">
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

            $('#exampleModal3').removeClass('show');
            $('#exampleModal3').hide(200);

        }
  }
}
</script>
