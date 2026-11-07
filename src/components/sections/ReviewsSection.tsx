import React, { useState } from 'react';
import { Star, Sparkles, MessageSquare, ExternalLink, MapPin, CheckCircle, Plus, X, HeartHandshake } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';
import { Card3D } from '../common/Card3D';

export const ReviewsSection: React.FC = () => {
  const { testimonials, settings, addTestimonial } = useSalon();
  const [filter, setFilter] = useState<'all' | 'google' | 'direct'>('all');
  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  // Review submission state
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState(5);
  const [serviceUsed, setServiceUsed] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const publishedReviews = testimonials.filter(t => t.published);
  const filteredReviews = filter === 'all'
    ? publishedReviews
    : publishedReviews.filter(t => t.source === filter);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewText.trim()) return;

    addTestimonial({
      name: reviewerName.trim(),
      rating,
      serviceUsed: serviceUsed.trim() || 'Salon Consultation',
      review: reviewText.trim(),
      source: 'direct',
      verified: true,
      published: true // auto published for demonstration, manageable in admin
    });

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setSubmitModalOpen(false);
      setReviewerName('');
      setReviewText('');
      setServiceUsed('');
    }, 2000);
  };

  return (
    <section id="reviews" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#041B12]/85 via-[#073B27]/80 to-[#0B291B]/85 backdrop-blur-[1px] text-[#F5EBDD] overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D5AD55]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#491D2B]/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5AD55] flex items-center justify-center gap-1.5 mb-2">
            <Sparkles size={14} /> Genuine Client Voices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5EBDD]">
            Client Testimonials &{' '}
            <span className="italic bg-gradient-to-r from-[#FFF4D2] via-[#D5AD55] to-[#B8923C] bg-clip-text text-transparent">
              Google Reviews
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EBDD]/75 mt-3 font-light leading-relaxed">
            Rated {settings.googleRating} out of 5 stars based on {settings.googleReviewCount}+ verified visits. Read authentic guest impressions or share your own experience.
          </p>
        </div>

        {/* Google Business Profile Master Integration Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B291B] via-[#073B27] to-[#041B12] border-2 border-[#D5AD55]/40 shadow-luxury flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Google Logo / Star Badge */}
            <div className="w-20 h-20 rounded-2xl bg-white p-3 flex flex-col items-center justify-center shadow-md shrink-0">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="text-[10px] font-bold text-gray-700 tracking-wider mt-0.5">Reviews</span>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <span className="font-serif text-3xl font-extrabold text-[#D5AD55]">
                  {settings.googleRating}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#F5EBDD] mt-1">
                Verified Google Business Profile
              </h3>
              <p className="text-xs text-[#F5EBDD]/70">
                Over {settings.googleReviewCount} authentic 5-star customer ratings recorded on Google Maps.
              </p>
            </div>
          </div>

          {/* Direct Google Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={settings.googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>Write a Google Review</span>
              <ExternalLink size={13} />
            </a>

            <a
              href="#location"
              className="px-4 py-2.5 rounded-full bg-[#073B27] border border-[#D5AD55]/40 text-[#D5AD55] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <MapPin size={13} />
              <span>View On Google Maps</span>
            </a>

            <button
              onClick={() => setSubmitModalOpen(true)}
              className="px-4 py-2.5 rounded-full bg-[#491D2B]/80 hover:bg-[#491D2B] border border-[#D5AD55]/40 text-[#D5AD55] hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <Plus size={14} />
              <span>Submit Salon Feedback</span>
            </button>
          </div>

        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10 text-xs">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'google', label: 'Google Verified' },
            { id: 'direct', label: 'Atelier Testimonials' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full font-medium transition-all border ${
                filter === tab.id
                  ? 'bg-[#D5AD55] text-[#073B27] font-bold border-[#D5AD55]'
                  : 'bg-[#0B291B]/80 text-[#F5EBDD]/70 border-[#D5AD55]/20 hover:border-[#D5AD55]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <Card3D key={rev.id} maxTilt={7} className="h-full">
              <div className="bg-[#0B291B]/80 border border-[#D5AD55]/30 hover:border-[#D5AD55]/60 rounded-2xl p-6 shadow-luxury h-full flex flex-col justify-between transition-all group">
                
                <div>
                  {/* Top Bar with Stars & Source */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider">
                      {rev.source === 'google' ? (
                        <span className="text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30 flex items-center gap-1">
                          <CheckCircle size={10} /> Google Verified
                        </span>
                      ) : (
                        <span className="text-[#D5AD55] bg-[#073B27] px-2 py-0.5 rounded border border-[#D5AD55]/30">
                          Salon Guest
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Review Quote */}
                  <p className="text-xs sm:text-sm text-[#F5EBDD]/85 leading-relaxed italic mb-6">
                    “{rev.review}”
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="pt-4 border-t border-[#D5AD55]/20 flex items-center gap-3">
                  {rev.avatar ? (
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#D5AD55]/50 shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#073B27] border border-[#D5AD55]/50 flex items-center justify-center font-serif text-sm font-bold text-[#D5AD55] shrink-0">
                      {rev.name[0]}
                    </div>
                  )}

                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#F5EBDD] group-hover:text-[#D5AD55] transition-colors">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-[#D5AD55]/80">
                      {rev.serviceUsed} • <span className="text-[#F5EBDD]/50">{rev.date}</span>
                    </p>
                  </div>
                </div>

              </div>
            </Card3D>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {submitModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-md bg-[#0B291B] border border-[#D5AD55]/50 rounded-2xl p-6 text-[#F5EBDD] shadow-2xl">
            
            <button
              onClick={() => setSubmitModalOpen(false)}
              className="absolute top-4 right-4 text-[#D5AD55] hover:text-white"
            >
              <X size={18} />
            </button>

            {submittedSuccess ? (
              <div className="text-center py-8">
                <CheckCircle size={48} className="mx-auto text-emerald-400 mb-3" />
                <h3 className="font-serif text-xl font-bold text-[#F5EBDD]">
                  Thank You for Your Feedback!
                </h3>
                <p className="text-xs text-[#F5EBDD]/70 mt-1">
                  Your review has been successfully registered. We deeply value your patronage.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="font-serif text-xl font-bold text-[#F5EBDD]">
                    Share Your Salon Experience
                  </h3>
                  <p className="text-xs text-[#F5EBDD]/70 mt-0.5">
                    Your honest feedback helps us maintain world-class standards.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D5AD55] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    placeholder="e.g. Sanya Kapoor"
                    className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-xs text-[#F5EBDD] focus:border-[#D5AD55] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D5AD55] mb-1">
                    Service Experience *
                  </label>
                  <input
                    type="text"
                    required
                    value={serviceUsed}
                    onChange={(e) => setServiceUsed(e.target.value)}
                    placeholder="e.g. French Balayage, Keratin, Men's Haircut"
                    className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-xs text-[#F5EBDD] focus:border-[#D5AD55] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D5AD55] mb-1">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="text-amber-400 p-1 hover:scale-125 transition-transform"
                      >
                        <Star
                          size={22}
                          fill={star <= rating ? 'currentColor' : 'none'}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D5AD55] mb-1">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Tell us about the ambience, stylist expertise, and your final look..."
                    className="w-full bg-[#073B27] border border-[#D5AD55]/30 rounded-xl px-3 py-2 text-xs text-[#F5EBDD] focus:border-[#D5AD55] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D5AD55] via-[#FFF4D2] to-[#B8923C] text-[#073B27] font-bold text-xs uppercase tracking-wider shadow-gold-glow"
                >
                  Submit Genuine Review
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
