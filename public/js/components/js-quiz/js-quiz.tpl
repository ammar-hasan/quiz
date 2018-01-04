<div>
	<div v-if="!quiz" class="form-group row">
		<div class="col">Loading</div>
	</div>
	<div v-if="quiz" class="form-group row">
		<div class="col">
			<h2 class="page-heading">{{quiz.title}}</h2>
		</div>
	</div>
	<div v-if="quiz" class="row main-content">
		<div class="col child-content">
			<div class="form-group row">
				<h4 class="section-title">
					<span v-html="quiz.questions[index].question"></span>
				</h4>
			</div>
			<div v-if="quiz.questions[index].code" class="form-group row">
				<div class="col-sm-3"></div>
				<div class="col-sm-6">
					<pre v-highlightjs="quiz.questions[index].code">
						<code v-bind:class="quiz.language"></code>
					</pre>
				</div>
				<div class="col-sm-3"></div>
			</div>
			<div class="form-group row">
				<div class="col"></div>
				<div class="col">
					<div v-for="option in quiz.questions[index].options" class="form-check">
						<label v-bind:for="'option-' + option.id" class="form-check-label">
							<input v-bind:id="'option-' + option.id" type="radio" name="options"  v-bind:value="option.id" v-model="quiz.questions[index].selection" class="form-check-input">
							<span v-html="option.text"></span>
						</label>
					</div>
				</div>
				<div class="col"></div>
			</div>
			<div class="form-group row">
	  			<div class="col center-text">
					<button v-bind:disabled="index==0" class="btn btn-info" @click="onPrevious">Previous</button>
					<button v-if="index<(quiz.questions.length-1)" class="btn btn-success" @click="onNext">Next</button>
	  				<button v-if="index==(quiz.questions.length-1)" @click="onFinish" class="btn btn-primary">Finish Quiz</button>
	  			</div>
	  		</div>
		</div>
	</div>
</div>